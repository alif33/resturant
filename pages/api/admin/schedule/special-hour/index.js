import nc from "next-connect";
import SpecialHours from "../../../../../models/SpecialHours";
import { isAdmin } from "../../../../../utils/auth";
import db from "../../../../../utils/db";
import { onError } from "../../../../../utils/error";

const handler = nc({ onError });

handler.use(isAdmin).post(async (req, res) => {
  const {
    de_day_name,
    de_s_time,
    de_e_time,
    pic_day_name,
    pic_s_time,
    pic_e_time,
    shop,
  } = req.body;

  await db.connect();
  const specialHours = new SpecialHours({
    de_day_name,
    de_s_time,
    de_e_time,
    pic_day_name,
    pic_s_time,
    pic_e_time,
    shop,
  });
  if (await specialHours.save()) {
    await db.disconnect();
    return res.send({
      success: true,
      message: "Special hours added successfully",
    });
  }
});

export default handler;
