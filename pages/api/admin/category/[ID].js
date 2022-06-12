import nc from 'next-connect';
import Category from '../../../../models/Category';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';
import slugify from 'slugify';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.ID){
        await db.connect();
    const category = await Category.findById(req.query.ID);
        await db.disconnect();
        res.send(category);
    }
});

handler.use(isAdmin).put(async (req, res) => {
  console.log(req.admin)
  const {categoryName, description, catalog_category} = req.body
  console.log(categoryName)
    try {
      await db.connect();
      const category = await Category.findByIdAndUpdate(
        { _id: req.query.ID }, {$set: { 
         categoryName: categoryName,
          categorySlug: slugify(`${ categoryName }`, '-'),
          description: description, catalog_category: catalog_category
        }})
   
         if (category) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Category update successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Category not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Category not found",
      });
    }
  });


handler.use(isAdmin).delete(async (req, res) => {
    try {
      await db.connect();
      const category = await Category.findByIdAndDelete({ _id: req.query.ID });
      if (category) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Category deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Category not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Category not found",
      });
    }
  });

export default handler;