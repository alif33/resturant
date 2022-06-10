import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shopStatus: {
      type: String,
      required: false,
      enum: ["onboarding", ""],
      default: ""    
    },
    shopPaid: {
      type: String,
      required: false,
      enum: ["Shop Paid", "Shop Unpaid", ""],
      default: ""
    },
    contactEmail: {
      type: String,
      required: false,
      default: ""
    },
    res_name: {
      type: String,
      required: false,
      default: ""
    },
    chain: {
      type: String,
      required: false,
      default: ""
    },
    description: {
      type: String,
      required: false,
      default: ""
    },
    sign_date: {
      type: String,
      required: false,
      default: ""
    },
    res_logo: {
      type: String,
      required: false,
      default: ""
    },
    landingLogo: {
      type: String,
      default: ""
    },
    resMobileImage: {
      type: String,
      default: ""
    },
    resDesctopImage: {
      type: String,
      default: ""
    },
    bannerText: {
        type: String, 
        default: ""
    },
    accountManager: {
        type: String, 
        default: ""
    },
    salesRepre: {
        type: String, 
        default: ""
    },
    menuRepre: {
        type: String, 
        default: ""
    },

    ownerEmail: {
        type: String, 
        default: ""
    },
    paymentFrequency: {
      type: String,
      enum: ["Weekly", "Biweekly", "Monthly", ""],
      default: ""
    },
    mealNow: {
      type: Number,
    },
    endTrial: {
        type: String, 
        default: ""
    },
    processingFee: {
        type: String, 
        default: ""
    },
    contactMethod: {
      type: String,
      enum: ["Phone", "Sms", "Email", "Tablet", ""],
      default: ""
    },
    gmbDomain: {
      type: String,
      default: ""
    },
    ownWebsite: {
      type: String,
      default: ""
    },
    priceRange: {
      type: String,
      default: ""
    },
    gmbStatus: {
      type: String,
      enum: ["primary Owner", "Manager", "Owner", "Not Verified", "Suspended", ""],
      default: ""
    },
    gmbRole: {
      type: String,
      default: ""
    },
    gmbEmail: {
      type: String,
      default: ""
    },
    gmbPassword: {
      type: String,
      default: ""
    },
    appleEmail: {
      type: String,
      default: ""
    },
    applePassword: {
      type: String,
      default: ""
    },
    appleStatus: {
      type: String,
      enum: ["Not Verified", "Suspended", ""],
      default: ""
    },
    appleOwner: {
      type: String,
      enum: ["Competitor", "Meal Now", ""],
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
      default: ""
    },
    ownerPhone: {
      type: String,
      default: ""
    },
    ownerName: {
      type: String,
      default: ""
    },
    sContactName: {
      type: String,
      default: ""
    },
    sContactPhone: {
      type: String,
      default: ""
    },
    sContactEmail: {
      type: String,
      default: ""
    },
    resPhone: {
      type: String,
      default: ""
    },
    minimumPickUpOrder: {
      type: Number,
      default: ""
    },
    pickUpEstimate: {
      type: String,
      default: ""
    },
    deliveryEstimate: {
      type: String,
      default: ""
    },
    onlineDiscount: {
      type: Number,
      default: ""
    },
    pauseDeliveryToday: {
        type: String, 
        default: ""
    },
    noScheduledOrder: {
        type: String, 
        default: ""
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Shop || mongoose.model("Shop", shopSchema);
