import nc from "next-connect";
import Schedule from "../../../models/Schedule";
import Shop from "../../../models/Shop";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
 try{
    await db.connect();
    const schedule = await Schedule.find({shop: req.query.shopId}).populate("shop", "shop_name", {Shop} );
    
    await db.disconnect();
    res.status(200).json(schedule)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
