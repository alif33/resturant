import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import db from '../../../utils/db';
import User from '../../../models/User';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, password } = req.body;
  await db.connect();
  User.find({ email }).exec(async (error, user) => {
    if (user) {
      res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }else{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const _user = new User({
        name, 
        email,
        password: hashedPassword
      });
    
      _user.save((err, user)=>{
        if (err) {
          res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (user) {
          const token = signToken(user);
          res.status(201).json({
            success: true,
            message: 'Registered successfully',
            token,
            user
          });
        }

      });
    }
    return await db.disconnect();
  })

});

export default handler;