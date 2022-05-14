import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
    {
        tagName: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Tag || mongoose.model('Tag', tagSchema);