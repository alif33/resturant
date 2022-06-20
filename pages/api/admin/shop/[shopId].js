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
    isAdmin,
    upload.fields([
      { name: "shop_logo", maxCount: 1 },
      { name: "web_header", maxCount: 1 },
      { name: "mobile_header", maxCount: 1 },
    ])
  )
  .put(async (req, res) => {
    // console.log(req.body)
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
      pause_delivery_today,
      no_scheduled_order,
      stop_order_today,
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

    //stream image upload on cloudinary
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


    //images


    let shop_logo;
    if (req.files.shop_logo) {
      shop_logo = await streamUpload(req.files.shop_logo[0].buffer);
    }

    let web_header;
    if (req.files.web_header) {
      web_header = await streamUpload(req.files.web_header[0].buffer);
    }
    let mobile_header;
    if (req.files.mobile_header) {
      mobile_header = await streamUpload(req.files.mobile_header[0].buffer);
    }



    try {
      await db.connect();
      const updated = await Shop.findByIdAndUpdate(
        { _id: req.query.shopId },
        {
          
          $set: {
            shop_status: shop_status,
            shop_pay_type: shop_pay_type,
            shop_name:  shop_name,
            shop_logo: shop_logo?.url,
            web_header: web_header?.url,
            mobile_header: mobile_header?.url,
            account_manager: account_manager,
            sales_rep: sales_rep,
            menu_rep: menu_rep,
            email_statement: email_statement,
            payment_frequency: payment_frequency,
            flat_fee: flat_fee,
            trial_end: trial_end,
            processing_fee: processing_fee,
            contact_method: contact_method,
            gmb_domain: gmb_domain,
            own_website: own_website,
            gmb_status: gmb_status,
            gmb_role: gmb_role,
            meal_now_domain: meal_now_domain,
            gmb_email: gmb_email,
            gmb_password: gmb_password,
            gmb_owner : gmb_owner,
            owners_email: owners_email,
            owners_name: owners_name,
            owners_phone: owners_phone,
            se_contact_name: se_contact_name,
            se_contact_phone: se_contact_phone,
            se_contact_email: se_contact_email,
            res_phone: res_phone,
            minimum_pickUp_order: minimum_pickUp_order,
            pickUp_estimate: pickUp_estimate,
            minimum_delivery_order: minimum_delivery_order,
            delivery_estimate: delivery_estimate,
            online_discount: online_discount,
            address: address,
            pause_delivery_today: pause_delivery_today,
            no_scheduled_order: no_scheduled_order,
            stop_order_today: stop_order_today

          }
        },
        {
          new: true
        }
      );

      await db.disconnect();
      if (updated) {
        res.status(200).json({
          success: true,
          message: "Shop update successfully",
          updated: updated,
        });
      } else {
        res.status(200).json({
          error: "Shop not found",
        });
      }
    } catch (err) {
     
      res.status(500).json({
        error: "Server side error",
      });
    }
  });

export default handler;

// shop_status: shop_status,
//         shop_pay_type: shop_pay_type,
//         shop_name: shop_name,
//         account_manager: account_manager,
//         sales_rep: sales_rep,
//         menu_rep: menu_rep,
//         email_statement: email_statement,
//         payment_frequency: payment_frequency,
//         flat_fee: flat_fee,
//         trial_end: trial_end,
//         processing_fee: processing_fee,
//         contact_method: contact_method,
//         gmb_domain: gmb_domain,
//         own_website: own_website,
//         gmb_status: gmb_status,
//         gmb_role: gmb_role,
//         meal_now_domain: meal_now_domain,
//         gmb_email: gmb_email,
//         gmb_password: gmb_password,
//         gmb_owner: gmb_owner,
//         address: address,
//         owners_email: owners_email,
//         owners_name: owners_name,
//         owners_phone: owners_phone,
//         se_contact_name: se_contact_name,
//         se_contact_phone: se_contact_phone,
//         se_contact_email: se_contact_email,
//         res_phone: res_phone,
//         minimum_pickUp_order: minimum_pickUp_order,
//         pickUp_estimate: pickUp_estimate,
//         minimum_delivery_order: minimum_delivery_order,
//         delivery_estimate: delivery_estimate,
//         online_discount: online_discount,
