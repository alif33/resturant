import mongoose from 'mongoose';

const classSheduleSchema = new mongoose.Schema(
    {
        className: {
            type: String,
            required: true,
            trim: true
        },
        staffMember: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'staff',
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        selectedDate: {
            type: Date,
            required: true
        },
        memberLimit: {
            type: Number,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
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

export default mongoose.models.ClassShedule || mongoose.model('ClassShedule', classSheduleSchema);
