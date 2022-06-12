import nc from "next-connect";
import SpecialHours from "../../../../../models/SpecialHours";
import { isAdmin } from "../../../../../utils/auth";
import db from "../../../../../utils/db";
import { onError } from "../../../../../utils/error";

const handler = nc({ onError });

handler.use(isAdmin).delete(async (req, res) => {
    try {
      await db.connect();
      const specialHours = await SpecialHours.findByIdAndDelete({ _id: req.query.id });
      if (specialHours) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Special hour deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Special hour not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Special hour not found",
      });
    }
  });
export default handler;
