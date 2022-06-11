import nc from "next-connect";
import Schedule from "../../../../models/Schedule";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
  const {
    de_day_name,
    de_s_time,
    de_e_time,
    pic_day_name,
    pic_s_time,
    pic_e_time,
    shop
  } = req.body;

  await db.connect();
  const schedule = new Schedule({
    de_day_name,
    de_s_time,
    de_e_time,
    pic_day_name,
    pic_s_time,
    pic_e_time,
    shop
  });
  if (await schedule.save()) {
    await db.disconnect();
    return res.send({
      success: true,
      message: "Schedule added successfully",
    });
  }
});

export default handler;
