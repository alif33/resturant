import mongoose from 'mongoose';

const AddPlanSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        monthlyPrice: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum : ['BREAKFAST', 'LUNCH', 'DINNER', 'EXTRA']
        },
        ingredients: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String
        }
        
    },
    { timestamps: true }
);

export default mongoose.models.AddPlan || mongoose.model('AddPlan', AddPlanSchema);

