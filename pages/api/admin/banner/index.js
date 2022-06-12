import nc from "next-connect";
import Banner from "../../../../models/Banner";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";

const handler = nc();

handler.use(isAdmin).post(async (req, res) => {
  const {
    driving_radius,
    add_marker,
    minimum_order,
    delivery_fee,
    delivery_radius,
    shop,
  } = req.body;
  await db.connect();
  const banner = new Banner({
    driving_radius,
    add_marker,
    minimum_order,
    delivery_fee,
    delivery_radius,
    shop,
  });
  if (await banner.save()) {
    await db.disconnect();
    return res.send({
      success: true,
      message: "Delivery zone added successfully",
    });
  }
});

export default handler;
