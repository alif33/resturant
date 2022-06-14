import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nc from "next-connect";
import streamifier from "streamifier";
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

handler
  .use(
    isAdmin,
    upload.fields([
      { name: "shop_logo", maxCount: 1 },
      { name: "web_header", maxCount: 1 },
      { name: "mobile_header", maxCount: 1 },
    ])
  )
  .post(async (req, res) => {
    const streamUpload = (file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(file).pipe(stream);
      });
    };

    const shop_logo = await streamUpload(req.files.shop_logo[0].buffer);
    const web_header = await streamUpload(req.files.web_header[0].buffer);
    const mobile_header = await streamUpload(req.files.mobile_header[0].buffer);

    const {
      shop_status,
      shop_pay_type,
      shop_name,
      account_manager,
      sales_rep,
      menu_rep,
      email_statement,
      payment_frequency,
      flat_fee,
      trial_end,
      processing_fee,
      contact_method,
      gmb_domain,
      own_website,
      gmb_status,
      gmb_role,
      meal_now_domain,
      gmb_email,
      gmb_password,
      gmb_owner,
      shop_address,
      city,
      state,
      zip_code,
      lat,
      long,
      time_zone,
      owners_email,
      owners_name,
      owners_phone,
      se_contact_name,
      se_contact_phone,
      se_contact_email,
      res_phone,
      minimum_pickUp_order,
      pickUp_estimate,
      minimum_delivery_order,
      delivery_estimate,
      online_discount,
    } = req.body;
    const address = {
      shop_address: shop_address,
      city: city,
      state: state,
      zip_code: zip_code,
      lat: lat,
      long: long,
      time_zone: time_zone,
    };

    if (shop_logo && web_header && mobile_header) {
      await db.connect();
      const shop = new Shop({
        shop_status,
        shop_pay_type,
        shop_name,
        shop_logo: shop_logo.url,
        web_header: web_header.url,
        mobile_header: mobile_header.url,
        account_manager,
        sales_rep,
        menu_rep,
        email_statement,
        payment_frequency,
        flat_fee,
        trial_end,
        processing_fee,
        contact_method,
        gmb_domain,
        own_website,
        gmb_status,
        gmb_role,
        meal_now_domain,
        gmb_email,
        gmb_password,
        gmb_owner,
        owners_email,
        owners_name,
        owners_phone,
        se_contact_name,
        se_contact_phone,
        se_contact_email,
        res_phone,
        minimum_pickUp_order,
        pickUp_estimate,
        minimum_delivery_order,
        delivery_estimate,
        online_discount,
        address: address,
      });
      if (await shop.save()) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Shop added successfully",
        });
      }
    } else {
      res.send({ error: "Server error" });
    }
  });

export default handler;
