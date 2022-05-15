import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import db from '../../../utils/db';
import Owner from '../../../models/Owner';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, password } = req.body;
  await db.connect();
  Owner.findOne({ email }).exec(async (error, owner) => {
    if (owner) {
      res.status(400).json({
        success: false,
        message: "Shop already registered",
      });
    }else{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const _owner = new Owner({
        name, 
        email,
        password: hashedPassword
      });
    
      _owner.save((err, owner)=>{
        if (err) {
          res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (owner) {
          const token = signToken(owner);
          res.status(201).json({
            success: true,
            message: 'Registered successfully',
            token,
            owner
          });
        }

      });
    }
    return await db.disconnect();
  })

});

export default handler;