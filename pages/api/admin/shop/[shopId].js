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

//get single shop
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

//updat shop details
handler
  .use(
    isAdmin,
    upload.fields([
      { name: "shop_logo", maxCount: 1 },
      { name: "landing_page_image", maxCount: 1 },
      { name: "mobile_bg", maxCount: 1 },
      { name: "desktop_bg", maxCount: 1 },
    ])
  )
  .put(async (req, res) => {
    // console.log(req.body)
    const {
      shop_status,
      shop_pay_type,
      shop_name,
      shop_description,
      agreement_date,
      banner_text,
      contact_name,
      account_manager,
      sales_rep,
      menu_rep,
      email_statement,
      payment_frequency,
      flat_fee,
      trial_end,
      processing_fee,
      contact_method,
      chain,
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
      delivery_estimate,
      online_discount,
      pause_delivery_today,
      no_scheduled_order,
    } = req.body;
  

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

    let landing_page_image;
    if (req.files.landing_page_image) {
      landing_page_image = await streamUpload(
        req.files.landing_page_image[0].buffer
      );
    }
    let mobile_bg;
    if (req.files.mobile_bg) {
      mobile_bg = await streamUpload(req.files.mobile_bg[0].buffer);
    }
    let desktop_bg;
    if (req.files.desktop_bg) {
      desktop_bg = await streamUpload(req.files.desktop_bg[0].buffer);
    }

    try {
      await db.connect();
      const shop = await Shop.findById(req.query.shopId);
      if (shop) {
        const address = {
          shop_address: shop_address || shop.address.shop_address,
          city: city || shop.address.city,
          state: state || shop.address.state,
          zip_code: zip_code || shop.address.zip_code,
          lat: lat || shop.address.lat,
          long: long || shop.address.long,
          time_zone: time_zone || shop.address.time_zone,
        };

        shop.shop_status = shop_status || shop.shop_status;
        shop.shop_pay_type = shop_pay_type || shop.shop_pay_type;
        shop.shop_name = shop_name || shop.shop_name;
        shop.chain = chain || shop.chain;
        shop.shop_description = shop_description || shop.shop_description;
        shop.agreement_date = agreement_date || shop.agreement_date;
        shop.shop_logo = shop_logo?.url || shop.shop_logo;
        shop.landing_page_image = landing_page_image?.url || shop.landing_page_image;
        shop.mobile_bg = mobile_bg?.url || shop.mobile_bg;
        shop.desktop_bg = desktop_bg?.url || shop.desktop_bg;
        shop.banner_text = banner_text || shop.banner_text;
        shop.account_manager = account_manager || shop.account_manager;
        shop.sales_rep = sales_rep || shop.sales_rep;
        shop.menu_rep = menu_rep || shop.menu_rep;
        shop.email_statement = email_statement || shop.email_statement;
        shop.payment_frequency = payment_frequency || shop.payment_frequency;
        shop.flat_fee = flat_fee || shop.flat_fee;
        shop.trial_end = trial_end || shop.trial_end;
        shop.processing_fee = processing_fee || shop.processing_fee;
        shop.contact_method = contact_method || shop.contact_method;
        shop.address = address,
        shop.owners_email = owners_email || shop.owners_email;
        shop.owners_name = owners_name || shop.owners_name;
        shop.owners_phone = owners_phone || shop.owners_phone;
        shop.se_contact_name = se_contact_name || shop.se_contact_name
        shop.se_contact_phone = se_contact_phone || shop.se_contact_phone;
        shop.se_contact_email = se_contact_email || shop.se_contact_email;
        shop.res_phone = res_phone || shop.res_phone;
        shop.minimum_pickUp_order = minimum_pickUp_order || shop.minimum_pickUp_order;
        shop.pickUp_estimate = pickUp_estimate || shop.pickUp_estimate;
        shop.delivery_estimate = delivery_estimate || shop.delivery_estimate;
        shop.online_discount = online_discount || shop.online_discount;
        shop.pause_delivery_today = pause_delivery_today || shop.pause_delivery_today;
        shop.no_scheduled_order = no_scheduled_order || shop.no_scheduled_order;

        await shop.save();
        await db.disconnect();
        res.status(200).json({
          success: true,
          message: "Shop update successfully",
          updated: shop,
        });
      } else {
        await db.disconnect();
        res.status(200).json({
          error: "Shop not found",
        });
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: "Server side error",
      });
    }
  });


  handler.use(isAdmin).delete(async (req, res) => {
    await db.connect();
    const shop = await Shop.findById(req.query.shopId);
    if (shop) {
      await shop.remove();
      await db.disconnect();
      res.send({success: true, message: 'Shop Deleted' });
    } else {
      await db.disconnect();
      res.send({ error: 'Shop Not Found' });
    }
  });

export default handler;

