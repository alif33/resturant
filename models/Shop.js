import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shopStatus: {
      type: String,
      required: true,
      default: ""    
    },
    shopPaid: {
      type: String,
      required: true,
      default: ""
    },
    contactEmail: {
      type: String,
      required: true,
      default: ""
    },
    res_name: {
      type: String,
      required: true, 
      default: ""
    },
    chain: {
      type: String,
      required: true,
      default: ""
    },
    description: {
      type: String,
      required: true,
      default: ""
    },
    sign_date: {
      type: String,
      required: true,
      default: ""
    },
    res_logo: {
      type: String,
      required: true,
      default: ""
    },
    landingLogo: {
      type: String,
      required: false,
      default: ""
    },
    resMobileImage: {
      type: String,
      required: false,
      default: ""
    },
    resDesctopImage: {
      type: String,
      required: false,
      default: ""
    },
    bannerText: {
        type: String,
        required: true,
        default: ""
    },
    accountManager: {
        type: String,
        required: fasle,
        default: ""
    },
    salesRepre: {
        type: String,
        required: true,
        default: ""
    },
    menuRepre: {
        type: String, 
        required: true,
        default: ""
    },

    ownerEmail: {
        type: String, 
        required: true,
        default: ""
    },
    paymentFrequency: {
      type: String,
      enum: ["Weekly", "Biweekly", "Monthly", ""],
      required: true,
      default: ""
    },
    mealNow: {
      type: Number,
      reuired: true,
    },
    endTrial: {
        type: String, 
        required: true,
        default: ""
    },
    processingFee: {
        type: String, 
        required: true,
        default: ""
    },
    contactMethod: {
      type: String,
      enum: ["Phone", "Sms", "Email", "Tablet", ""],
      reuired: true,
      default: ""
    },
    gmbDomain: {
      type: String,
      required: true,
      default: ""
    },
    ownWebsite: {
      type: String,
      required: true,
      default: ""
    },
    priceRange: {
      type: String,
      required: true,
      default: ""
    },
    gmbStatus: {
      type: String,
      enum: ["primary Owner", "Manager", "Owner", "Not Verified", "Suspended", ""],
      required: true,
      default: ""
    },
    gmbRole: {
      type: String,
      required: true,
      default: ""
    },
    gmbEmail: {
      type: String,
      required: true,
      default: ""
    },
    gmbPassword: {
      type: String,
      required: true,
      default: ""
    },
    appleEmail: {
      type: String,
      required: true,
      default: ""
    },
    applePassword: {
      type: String,
      required: true,
      default: ""
    },
    appleStatus: {
      type: String,
      enum: ["Not Verified", "Suspended", ""],
      required: true,
      default: ""
    },
    appleOwner: {
      type: String,
      enum: ["Competitor", "Meal Now", ""],
      required: true,
      default: ""
    },
    
    address: {
      shopsAddress: {
        type: String,
        default: ""
      },

      city: {
        type: String,
        required: false,
        default: ""
      },
      state: {
        type: String,
        required: false,
        default: ""
      },
      zipCode: {
        type: String,
        required: false,
        default: ""
      },
      lat: {
        type: String,
        required: false,
        default: ""
      },
      long: {
        type: String,
        required: false,
        default: ""
      },
      timeZone: {
        type: String,
        required: false,
        default: ""
      },
    },
    ownerEmail: {
      type: String,
      required: true,
      default: ""
    },
    ownerPhone: {
      type: String,
      required: true,
      default: ""
    },
    ownerName: {
      type: String,
      required: true,
      default: ""
    },
    sContactName: {
      type: String,
      reuired: true,
      default: ""
    },
    sContactPhone: {
      type: String,
      required: true,
      default: ""
    },
    sContactEmail: {
      type: String,
      required: true,
      default: ""
    },
    resPhone: {
      type: String,
      required: true,
      default: ""
    },
    minimumPickUpOrder: {
      type: Number,
      required: true,
      default: ""
    },
    pickUpEstimate: {
      type: String,
      required: true,
      default: ""
    },
    deliveryEstimate: {
      type: String,
      required: true,
      default: ""
    },
    onlineDiscount: {
      type: Number,
      required: true,
      default: ""
    },
    pauseDeliveryToday: {
        type: String, 
        required: true,
        default: ""
    },
    noScheduledOrder: {
        type: String,
        required: true,
        default: ""
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Shop || mongoose.model("Shop", shopSchema);
