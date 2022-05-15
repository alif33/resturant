import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import db from '../../../utils/db';
import Admin from '../../../models/Admin';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, password } = req.body;
  await db.connect();
  Admin.findOne({ email }).exec(async (error, admin) => {
    if (admin) {
      res.status(400).json({
        success: false,
        message: "Admin already registered",
      });
    }else{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const _admin = new Admin({
        name, 
        email,
        password: hashedPassword
      });
    
      _admin.save((err, admin)=>{
        if (err) {
          res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (admin) {
          const token = signToken(admin);
            res.status(201).json({
              success: true,
              message: 'Registered successfully',
              token,
              admin
            });
        }

      });
    }
    return await db.disconnect();
  })

});

export default handler;