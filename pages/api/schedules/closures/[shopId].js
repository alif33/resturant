import nc from "next-connect";
import Closures from "../../../../models/Closures";
import Shop from "../../../../models/Shop";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
 try{
    await db.connect();
    const  closures = await Closures.find({shop: req.query.shopId}).populate("shop", "shop_name", {Shop} );
    
    await db.disconnect();
    res.status(200).json(closures)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
