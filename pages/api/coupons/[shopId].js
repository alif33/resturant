import nc from "next-connect";
import Coupon from "../../../models/Coupon";
import Shop from "../../../models/Shop";
import db from "../../../utils/db";


const handler = nc();

handler.get(async (req, res) => {
 try{
    await db.connect();
    const coupon = await Coupon.find({shop: req.query.shopId}).populate("_shop", "shop_name", {Shop} );
    
    await db.disconnect();
    res.status(200).json(coupon)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
