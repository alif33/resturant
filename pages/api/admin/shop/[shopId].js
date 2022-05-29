import nc from "next-connect";
import Shop from "../../../../models/Shop";
import db from "../../../../utils/db";

import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';


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
    try{
        await db.connect();
        const shop = await Shop.findById({_id: req.query.shopId});
        await db.disconnect();
        res.status(200).json(shop)
     }catch(err){
        res.status(500).json({
            error: "Server side error"
        })
     }
      
})


// handler.put(async (req, res) => {
//   try {
//     await db.connect();
//     const shop = await Shop.findByIdAndUpdate(
//       { _id: req.query.shopId },
//       { $set: req.body }
      
//     );
//     await db.disconnect();
//     res.status(200).json(shop);
//   } catch (err) {
//     res.status(500).json({
//       error: "Server side error",
//     });
//   }
// });


export default handler;
