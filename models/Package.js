import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        period: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        
    },
    { timestamps: true }
);

export default mongoose.models.Package || mongoose.model('Package', packageSchema);

