import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        role: {
            type: Boolean,
            default: true
        },
        message: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', orderSchema);

