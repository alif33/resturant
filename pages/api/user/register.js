import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import db from '../../../utils/db';
import User from '../../../models/User';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, password } = req.body;
  await db.connect();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const _user = new User({
    name, 
    email,
    password: hashedPassword
  });

  const user = await _user.save();
  await db.disconnect();

  res.send({
      success: true,
      message: 'Registered successfully'
  });
});

export default handler;