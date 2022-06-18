import nc from "next-connect";
import Shop from "../../../../models/Shop";
import db from "../../../../utils/db";
import streamifier from "streamifier";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { isAdmin } from "../../../../utils/auth";

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

export const handler = nc();
export const upload = multer();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const shop = await Shop.findById({ _id: req.query.shopId });
    await db.disconnect();
    res.status(200).json(shop);
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

handler
  .use(
    isAdmin
  )
  .put(async (req, res) => {
    console.log(req.body)
    // const imageArray = [
    //   req.files.res_logo[0].buffer,
    //   req.files.landingLogo[0].buffer,
    //   req.files.resDesctopImage[0].buffer,
    //   req.files.resMobileImage[0].buffer,
    // ];

  //   const streamUpload = (files) => {
  //     return new Promise((resolve, reject) => {
  //         const stream = cloudinary.uploader.upload_stream((error, result) => {
  //             if (result) {
  //                 resolve(result);
  //             } else {
  //                 reject(error);
  //             }
  //         });
  //         console.log(file)
  //         streamifier.createReadStream(file.buffer).pipe(stream);
  //     });
  // };
  //   const streamed = await streamUpload(req.files);
    // console.log(streamed);

    try {
      await db.connect();
    const updated  = await Shop.findByIdAndUpdate(
        { _id: req.query.shopId },
        { $set: req.body }
      );
      await db.disconnect();
      res.status(200).json({
        success: true,
        message: "Shop update successfully",
        updated: updated
      });
    } catch (err) {
      res.status(500).json({
        error: "Server side error",
      });
    }
  });

export default handler;
