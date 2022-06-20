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

handler.use(isAdmin, upload.single("image")).post(async (req, res) => {
  const { product_name, shop, description, category, options,
    cata_title, cata_price, property_name, limit, property_option, sele_name, large_price, xlarge_price
  } = req.body;


  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };
  const { url } = await streamUpload(req);

  if (url) {
    await db.connect();

    const product = new Product({
      product_name: product_name,
      description: description,
      category: category,
      image: url,
      options: options,
      shop: shop,
      catalog: {product_type: {cata_title: cata_title, cata_price: cata_price}},
      property: {property_name: property_name, limit: limit, options: property_option, 
        selection: {name: sele_name, large_price: large_price, xlarge_price: xlarge_price}}
    });
    if (await product.save()) {
      await db.disconnect();
      res.send({
        success: true,
        message: "Product added successfully",
      });
    }
  }
});

export default handler;
