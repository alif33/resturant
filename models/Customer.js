import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Customer || mongoose.model('Customer', customerSchema);

