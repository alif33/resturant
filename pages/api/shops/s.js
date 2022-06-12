import nc from "next-connect";
import Shop from "../../../models/Shop";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
 try{
    await db.connect();
    const shop = await Shop.find({shop_name: new RegExp(req.query.search, "i")} );
    await db.disconnect();
    res.status(200).json(shop)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
