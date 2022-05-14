import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(
    {
      qty: { 
        type: Number, 
        required: true 
      },
      _p: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
      },
      subTotal: {
        type: Number, 
        required: true 
      }
    },
    { timestamps: true }
  );

const transactionSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Customer', 
            required: true 
        },
        products: [productSchema],
        total: {
            type: Number,
            required: true 
        }
    },
    { timestamps: true }
);

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

