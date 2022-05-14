import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            enum : ['MALE', 'FEMALE', 'OTHERS']
        },
        mobile: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String, 
            required: true 
        },
        position: {
            type: Date,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        _owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'admin',
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Staff || mongoose.model('Staff', staffSchema);
