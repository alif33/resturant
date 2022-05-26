import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import Owner from '../../../models/Owner';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const owner = await Owner.findOne({ email: req.body.email });
  await db.disconnect();
  if (owner && bcrypt.compareSync(req.body.password, owner.password)) {
    const token = signToken(owner);
    res.send({
      success: true,
      token,
      owner
    });
  } else {
    res.status(401).send({ message: 'Invalid Credentials' });
  }
});

export default handler;
