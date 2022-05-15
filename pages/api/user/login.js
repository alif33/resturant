import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken(user);
    res.send({
      success: true,
      token,
      user
    });
  } else {
    res.status(401).send({ message: 'Invalid Credentials' });
  }
});

export default handler;
