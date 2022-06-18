import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nc from "next-connect";
import streamifier from "streamifier";
import Product from "../../../../models/Product";
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
      const product = await Product.findById({ _id: req.query.id });
      await db.disconnect();
      res.status(200).json(product);
    } catch (err) {
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
          property_option: property_option,
          selection: {
            sele_name: sele_name,
            large_price: large_price,
            xlarge_price: xlarge_price,
          },
        },
      }, {
        new: true
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

export default handler;
