import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        sku: {
            type: String,
            required: true,
            trim: true
        },
        manufacturerCompany: {
            type: String,
            required: true,
            trim: true
        },
        manufacturerDate: {
            type: Date
        },
        description: {
            type: String,
            trim: true
        },
        specification: {
            type: String,
            trim: true
        },
        image: {
            type: String
        }
        
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', productSchema);




