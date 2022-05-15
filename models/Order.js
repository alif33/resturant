import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema(
    {
        _date: {
            type: Date,
            required: true,
        },
        present: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'member',
                required: true
            }
        ],
        _shop: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shop',
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);