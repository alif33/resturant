import nc from "next-connect";
import Category from "../../../models/Category";
import Product from "../../../models/Product";
import Shop from "../../../models/Shop";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {

   console.log(req.query)
 try{
    await db.connect();
    const product = await Product.find({shop: req.query.shopId}).populate("category shop", "categoryName shop_name", {Shop, Category} );
    await db.disconnect();
    res.status(200).json(product)
 }catch(err){
    res.status(500).json({
        error: "Server side error"
    })
 }
  
});

export default handler;
