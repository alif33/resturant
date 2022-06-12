// import nc from "next-connect";
// import DeliveryZone from "../../../../models/DeliveryZone";
// import { isAdmin } from "../../../../utils/auth";
// import db from "../../../../utils/db";

// const handler = nc();

// handler.get(async (req, res) => {

//   await db.connect();
//   const deliveryZone = new DeliveryZone({
//   });
//   if (await deliveryZone.save()) {
//     await db.disconnect();
//     return res.send({
//       success: true,
//       message: "Delivery zone added successfully",
//     });
//   }
// });

// export default handler;
