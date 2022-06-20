import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nc from "next-connect";
import streamifier from "streamifier";
import Category from "../../../../models/Category";
import Product from "../../../../models/Product";
import Shop from "../../../../models/Shop";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc();
const upload = multer();

// single product get

handler.get(async (req, res) => {
  try {
    await db.connect();
    const product = await Product.findById({ _id: req.query.id }).populate(
      "category shop",
      "categoryName shop_name",
      { Shop, Category }
    );
    await db.disconnect();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

// copy the product

handler.use(isAdmin).post(async (req, res) => {
  try {
    await db.connect();
    const product = await Product.findById({ _id: req.query.id });

    if (product) {
      const duplicate = product.toObject();
      delete duplicate._id;
      duplicate.product_name = duplicate.product_name + " " + "Copy"
      const newProduct = new Product(duplicate);
      if (await newProduct.save()) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Product copied",
        });
      } else {
        res.send({ error: "erver side error" });
      }
    } else {
      res.send({ error: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server side error",
    });
  }
});

//updated

handler.use(isAdmin, upload.single("image")).put(async (req, res) => {
  const {
    product_name,
    shop,
    description,
    category,
    options,
    cata_title,
    cata_price,
    property_name,
    limit,
    property_option,
    sele_name,
    large_price,
    xlarge_price,
  } = req.body;

  //cloudinary upload file streamifier

  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req?.file.buffer).pipe(stream);
    });
  };

  let image;
  if (req?.file) {
    image = await streamUpload(req);
  }

  try {
    await db.connect();
    const updated = await Product.findByIdAndUpdate(
      { _id: req.query.id },
      {
        $set: {
          product_name: product_name,
          description: description,
          category: category,
          image: image?.url,
          options: options,
          catalog: {
            product_type: { cata_title: cata_title, cata_price: cata_price },
          },
          property: {
            property_name: property_name,
            limit: limit,
            options: property_option,
            selection: {
              name: sele_name,
              large_price: large_price,
              xlarge_price: xlarge_price,
            },
          },
        },
      },
      {
        new: true,
      }
    );
    if (updated) {
      await db.disconnect();
      res.send({
        success: true,
        message: "Product update successfully",
        updated: updated,
      });
    } else {
      await db.disconnect();
      res.send({
        error: "Product not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

handler.use(isAdmin).delete(async (req, res) => {
  try {
    await db.connect();
    const product = await Product.findByIdAndDelete({ _id: req.query.id });
    if (product) {
      await db.disconnect();
      res.send({
        success: true,
        message: "Product deleted",
      });
    } else {
      await db.disconnect();
      res.send({
        success: false,
        error: "Product not found",
      });
    }
  } catch (error) {
    await db.disconnect();
    res.send({
      error: "Product not found",
    });
  }
});

//delete product

export default handler;
