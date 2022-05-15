import mongoose from 'mongoose';

const ownerShchema = new mongoose.Schema(
  {
    ownerName: { 
        type: String, 
        required: true 
    },
    ownerCell: { 
        type: String, 
        required: true, 
        unique: true 
    },
    ownerEmail: { 
        type: String, 
        required: true 
    },
    localTime: { 
        type: String, 
        required: true 
    },
    _phone: { 
        type: String, 
        required: true 
    },
    deliveryTime: { 
        type: String, 
        required: true 
    },
    adress: {
        city: {
            
        }
    },
    pickUpTime: { 
        type: String, 
        required: true 
    },
    _owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Owner || mongoose.model('Owner', ownerShchema);

