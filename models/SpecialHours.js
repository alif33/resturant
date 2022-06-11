import mongoose from "mongoose";

const SpecialHoursSchema = new mongoose.Schema(
  {
    de_day_name: {
      type: String,
      required: true,
      time: true,
      
    },
    de_s_time: {
      type: String,
      required: true,
      time: true,
    },
    de_e_time: {
      type: String,
      required: true,
      time: true,
    },
    pic_day_name: {
      type: String,
      required: true,
      time: true,
    },
    pic_s_time: {
      type: String,
      required: true,
      time: true,
    },
    pic_e_time: {
      type: String,
      required: true,
      time: true,
    },


    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.specialHours ||
  mongoose.model("specialHours", SpecialHoursSchema);
