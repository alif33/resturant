import mongoose from 'mongoose';

const shopShchema = new mongoose.Schema(
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
    _email: { 
        type: String, 
        required: true 
    },
    _cell: { 
        type: String, 
        required: true, 
        unique: true 
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
            type: String, 
            required: true  
        },
        state: {
            type: String, 
            required: true 
        },
        zipCode: {
            type: String, 
            required: true 
        },
        lat: {
            type: String, 
            required: true 
        },
        long: {
            type: String, 
            required: true 
        },
        timeZone: {
            type: String, 
            required: true  
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

export default mongoose.models.Shop || mongoose.model('Shop', shopShchema);

