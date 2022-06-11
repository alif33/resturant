import nc from "next-connect";
import Category from "../../models/Category";
import db from "../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
 try{
    await db.connect();
    const category = await Category.find({});
    await db.disconnect();
    res.status(200).json(category)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
