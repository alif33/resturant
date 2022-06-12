import nc from "next-connect";
import Coupon from "../../../../models/Coupon";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";

const handler = nc();

handler.use(isAdmin).post(async (req, res) => {
  const {
    name,
    description,
    _type,
    amount,
    coupon_condition,
    _shop,
  } = req.body;
  await db.connect();
  const coupon = new Coupon({
    name,
    description,
    _type,
    amount,
    coupon_condition,
    _shop,
  });
  if (await coupon.save()) {
    await db.disconnect();
    return res.send({
      success: true,
      message: "Delivery zone added successfully",
    });
  }
});

export default handler;
