import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shop_status: {
      type: String,
      required: true,
      enum: ["Live", "Temporarily Paused", "M2M", "Disabled"],
    },
    shop_pay_type: {
      type: String,
      enum: ["Direct Deposit"],
      default: "Direct Deposit",
      required: true,
    },

    shop_name: {
      type: String,
      required: true,
      trim: true,
    },
    chain: {
      type: String,
      required: true,
      trim: true,
    },
    shop_description: {
      type: String,
      required: true,
      trim: true,
    },
    agreement_date: {
      type: String,
      required: true,
      trim: true,
    },

    shop_logo: {
      type: String,
      required: true,
      default: "",
    },
    landing_page_image: {
      type: String,
      required: true,
      trim: true,
    },
    mobile_bg: {
      type: String,
      required: true,
      trim: true,
    },
    desktop_bg: {
      type: String,
      required: true,
      trim: true,
    },
    banner_text: {
      type: String,
      required: true,
    },

    account_manager: {
      type: String,
      required: false,
    },
    sales_rep: {
      type: String,
      required: true,
    },
    menu_rep: {
      type: String,
      required: true,
    },
    email_statement: {
      type: String,
      required: true,
    },
    payment_frequency: {
      type: String,
      enum: ["Weekly", "Biweekly", "Monthly"],
      required: true,
    },
    flat_fee: {
      type: Number,
      reuired: true,
      trim: true
    },
    trial_end: {
      type: String,
      required: true,
      trim: true
    },
    processing_fee: {
      type: String,
      required: true,
      trim: true
    },
    contact_method: {
      type: String,
      enum: ["Phone", "Sms", "Email", "Tablet"],
      reuired: true,
    },
    gmb_domain: {
      type: String,
      required: true,
    },
    own_website: {
      type: String,
      required: true,
    },
    price_range: {
      type: String,
      required: true,
      trim: true
    },

    gmb_status: {
      type: String,
      enum: ["Verified", "Not Verified", "Suspended"],
      required: true,
    },
    gmb_role: {
      type: String,
      enum: ["Primary Owner", "Manager", "Owner", "Not Verified", "Suspended"],
      required: true,
    },
    gmb_email: {
      type: String,
      required: true,
    },
    gmb_password: {
      type: String,
      required: true,
    },
    gmb_owner: {
      type: String,
      enum: ["Competitor", "Meal Now"],
      required: true,
    },

    apple_map_email: {
      type: String,
      required: true,
    },
    apple_map_pass: {
      type: String,
      required: true,
    },
    apple_map_status: {
      type: String,
      enum: ['Verified', 'Not Verified', "Suspended"],
      required: true,
    },
    apple_map_owner: {
      type: String,
      enum: ["Competitor", "Meal Now"],
      required: true,
    },
    address: {
      shop_address: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
      lat: {
        type: String,
        required: false,
        default: "",
      },
      long: {
        type: String,
        required: false,
        default: "",
      },
      time_zone: {
        type: String,
        required: false,
        default: "",
      },
    },
    owners_email: {
      type: String,
      required: true,
    },
    owners_phone: {
      type: String,
      required: true,
    },
    owners_name: {
      type: String,
      required: true,
    },
    se_contact_name: {
      type: String,
      reuired: true,
    },
    se_contact_phone: {
      type: String,
      required: true,
      default: "",
    },
    se_contact_email: {
      type: String,
      required: true,
    },
    res_phone: {
      type: String,
      required: true,
    },

    minimum_pickUp_order: {
      type: Number,
      required: true,
    },
 
    pickUp_estimate: {
      type: String,
      required: true,
    },
    delivery_estimate: {
      type: String,
      required: true,
    },
    online_discount: {
      type: Number,
      required: true,
    },
    pause_delivery_today: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    no_scheduled_order: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "inactive",
    },
   
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.models.Shop || mongoose.model("Shop", shopSchema);
