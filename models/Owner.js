import mongoose from 'mongoose';

const ownerShchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    _shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shop'
  }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Owner || mongoose.model('Owner', ownerShchema);

