import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
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
            unique: true,
            required: true
        },
        password: {
            type: String, 
            required: true 
        },
        _package: {
            type: Array,
            required: true
        },
        _valid: {
            type: Date,
            required: true
        },
        valid_: {
            type: Date,
            required: true
        },
        payDate: {
            type: Date,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        },
        _owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'admin',
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Member || mongoose.model('Member', memberSchema);