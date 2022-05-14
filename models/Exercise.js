import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        bodyPart: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        ],
        equipment: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        level:{
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        rest: {
            type: String,
            required: true,
            trim: true
        },
        sets: {
            type: String,
            required: true,
            trim: true
        },
        reps: {
            type: String,
            required: true,
            trim: true
        },
        instructions: {
            type: String,
            trim: true,
            required: true
        },
        tips: {
            type: String,
            trim: true,
            required: true
        },
        image: {
            type: String
        },
        _owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'admin',
            required: true
        } 
    },
    { timestamps: true }
);

export default mongoose.models.Exercise || mongoose.model('Exercise', exerciseSchema);
