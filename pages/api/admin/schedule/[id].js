import nc from "next-connect";
import Schedule from "../../../../models/Schedule";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.use(isAdmin).delete(async (req, res) => {
  try {
    await db.connect();
    const schedule = await Schedule.findByIdAndDelete({ _id: req.query.id });
    console.log(schedule);
    if (schedule) {
      await db.disconnect();
      res.send({
        success: true,
        message: "Schedule deleted successfully",
      });
    } else {
      await db.disconnect();
      res.send({
        success: false,
        error: "Schedule not found",
      });
    }
  } catch (error) {
    await db.disconnect();
    res.send({
      error: "Schedule not found",
    });
  }
});
export default handler;
