// import nc from "next-connect";
// import Coupon from "../../../../models/Coupon";
// import { isAdmin } from "../../../../utils/auth";
// import db from "../../../../utils/db";

// const handler = nc();

// handler.get(async (req, res) => {

//   await db.connect();
//   const coupon = new Coupon({
//   });
//   if (await coupon.save()) {
//     await db.disconnect();
//     return res.send({
//       success: true,
//       message: "Delivery zone added successfully",
//     });
//   }
// });

// export default handler;
