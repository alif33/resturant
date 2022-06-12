import nc from "next-connect";
import Shop from "../../../models/Shop";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
    console.log(req.query)
 try{
    await db.connect();
    const shop = await Shop.find({ $or: [
        {shop_name: new RegExp(req.query.search, "i")},
        {_id: req.query.search},
       
    ] });
    await db.disconnect();
    res.status(200).json(shop)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
