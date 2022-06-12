import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        _type: {
            type: String,
            enum: ['Flat', 'Percentage']
        },
        amount: {
            type: Number,
            required: true,
            trim: true
        },
        coupon_condition:{
            type: String,
            enum: ['Order Subtotal', 'Has Product Type'],
            required: false,

        },
        _shop: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shop',
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.banner || mongoose.model('banner', bannerSchema);
