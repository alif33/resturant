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
  .use(isAdmin,upload.fields(
    [{ name: "shop_logo", maxCount: 1 },
      { name: "landing_page_image", maxCount: 1 },
      { name: "mobile_bg", maxCount: 1 },
      { name: "desktop_bg", maxCount: 1 },
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
    const landing_page_image = await streamUpload(req.files.landing_page_image[0].buffer);
    const mobile_bg = await streamUpload(req.files.mobile_bg[0].buffer);
    const desktop_bg = await streamUpload(req.files.desktop_bg[0].buffer);

    const {
      shop_status,
      shop_pay_type,
      shop_name,
      chain,
      shop_description,
      agreement_date,
      banner_text,
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
      price_range,
      gmb_status,
      gmb_role,
      gmb_email,
      gmb_password,
      gmb_owner,
      apple_map_email,
      apple_map_pass,
      apple_map_status,
      apple_map_owner,
      owners_email,
      owners_name,
      owners_phone,
      se_contact_name,
      se_contact_phone,
      se_contact_email,
      res_phone,
      minimum_pickUp_order,
      pickUp_estimate,
      delivery_estimate,
      online_discount,
      shop_address,
      city,
      state,
      zip_code,
      long,
      lat,
      time_zone
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

    if (shop_logo && landing_page_image && mobile_bg && desktop_bg) {
      await db.connect();
      const shop = new Shop({
        shop_status,
        shop_pay_type,
        shop_name,
        chain,
        shop_description,
        agreement_date,
        shop_logo: shop_logo.url,
        landing_page_image: landing_page_image.url,
        mobile_bg: mobile_bg.url,
        desktop_bg: desktop_bg.url,
        banner_text,
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
        price_range,
        gmb_status,
        gmb_role,
        gmb_email,
        gmb_password,
        gmb_owner,
        apple_map_email,
        apple_map_pass,
        apple_map_status,
        apple_map_owner,
        address: address,
        owners_email,
        owners_name,
        owners_phone,
        se_contact_name,
        se_contact_phone,
        se_contact_email,
        res_phone,
        minimum_pickUp_order,
        pickUp_estimate,
        delivery_estimate,
        online_discount,
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
