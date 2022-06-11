import nc from "next-connect";
import Closures from "../../../../models/Closures";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.use(isAdmin).delete(async (req, res) => {
    try {
      await db.connect();
      const closures = await Closures.findByIdAndDelete({ _id: req.query.id });
      if (closures) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Closure deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Closure not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Closure not found",
      });
    }
  });
export default handler;
