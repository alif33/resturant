import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import Owner from "../models/Owner";
import db from "../utils/db";

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

const adminVerify = async (decode, res, next) => {
  await db.connect();
  const admin = await Admin.find({ _id: decode._id });
  await db.disconnect();
  if (admin.length > 0) {
    next();
  } else {
    res.status(401).send({ message: "Access Denied" });
  }
};
const userVerify = async (decode, res, next) => {
  await db.connect();
  const owner = await Owner.find({ _id: decode._id });
  await db.disconnect();
  if (owner.length > 0) {
    next();
  } else {
    res.status(401).send({ message: "Access Denied" });
  }
};

const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Access Denied" });
      } else {
        req.user = decode;
        userVerify(decode, res, next);
      }
    });
  } else {
    res.status(401).send({ message: "Access Denied" });
  }
};

const isAdmin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Access Denied" });
      } else {
        req.user = decode;
        adminVerify(decode, res, next);
      }
    });
  } else {
    res.status(401).send({ message: "Access Denied" });
  }
};

export { signToken, isAuth, isAdmin };

