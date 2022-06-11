import nc from "next-connect";
import Shop from "../../../../models/Shop";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";

const handler = nc();
handler.use(isAdmin).post(async (req, res) => {
  const {
    shop_status,
    payment_type,
    shop_name,
    shop_logo,
    web_header,
    mobile_header,
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
  const address = { shop_address: shop_address, city: city, state: state, 
    zip_code: zip_code, lat: lat, long: long, time_zone: time_zone };

  await db.connect();
  const shop = new Shop({
    shop_status,
    payment_type,
    shop_name,
    shop_logo,
    web_header,
    mobile_header,
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
    address:address
  });
  if (await shop.save()) {
    await db.disconnect();
    res.send({
      success: true,
      message: "Shop added successfully",
    });
  }
});

export default handler;
