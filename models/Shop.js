import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shop_status: {
      type: String,
      enum: ["Live", "Temporarily Poused", "M2M", "Disable"], 
      required: true,
    },
    payment_type: {
      type: String,
      required: true,
      enum: ["Direct Deposit"]
    },
    shop_name: {
      type: String,
      required: true,
    },

    shop_logo: {
      type: String,
      required: true,
      default: ""
    },
    web_header: {
      type: String,
      required: false,
    },
    mobile_header: {
      type: String,
      required: false,
    },
    account_manager: {
        type: String,
        required: fasle,
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
    },
    trial_end: {
        type: Number, 
        required: true,
    },
    processing_fee: {
        type: String, 
        required: true,
    },
    contact_method: {
      type: String,
      enum: ["Phone", "Sms", "Email", "Tablet"],
      reuired: true,
    },
    gmb_omain: {
      type: String,
      required: true,
    },
    own_website: {
      type: String,
      required: true,
    },

    gmb_status: {
      type: String,
      enum: [ "Varified","Not Verified", "Suspended"],
      required: true,
    },
    gmb_role: {
      type: String,
      required: true,
    enum: ["Primary Owner", "Manager", "Owner"],
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
      required: true,
      enum: ["Competitor", "Meal Now"],
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
      zipCode: {
        type: String,
        required: true,
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
    minimum_delivery_order: {
      type: Number,
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
        enum: ['active', 'inactive']
    },
    no_scheduled_order: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    },
    stop_orders_today: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    }, 
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Shop || mongoose.model("Shop", shopSchema);
