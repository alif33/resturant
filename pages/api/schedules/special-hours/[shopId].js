import nc from "next-connect";
import Shop from "../../../../models/Shop";
import SpecialHours from "../../../../models/SpecialHours";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
 try{
    await db.connect();
    const specialHours = await SpecialHours.find({shop: req.query.shopId}).populate("shop", "shop_name", {Shop} );
    
    await db.disconnect();
    res.status(200).json(specialHours)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
