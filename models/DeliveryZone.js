import mongoose from "mongoose";

const DeliveryZoneSchema = new mongoose.Schema(
  {
    driving_radius: {
      type: Number,
      required: true,
      time: true,
    },
    add_marker: {
      type: String,
      required: true,
      time: true,
    },
    minimum_order: {
      type: Number,
      required: true,
      time: true,
    },
    delivery_fee: {
      type: Number,
      required: true,
      time: true,
    },
    delivery_radius: {
      type: Number,
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

export default mongoose.models.DeliveryZone ||
  mongoose.model("DeliveryZone", DeliveryZoneSchema);
