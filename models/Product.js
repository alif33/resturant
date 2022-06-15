import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      requries: true,
      trim: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    required: true
  },
    image: {
      type: String,
      required: true,
      trim: true
    },
    options: {
      type: Array
    },
    catalog: {
        product_type: {
          cata_title: {
            type: String,
            required: true
          },
          cata_price: {
            type: String,
            required: true
          }
        },

    },
    property: {
      property_name: {
        type: String,
        required: false,
        trim: true,
        default: ""
        
      },
      limit: {
        type: Number,
        required: false,
        trim: true,
        default: ""
      },
      options: {
        type: Array
      },
      
      selection: {
        name: {
          type: String,
          required: false,
          trim: true,
          default: ""
        },
        large_price: {
          type: Number,
          trim: true,
          default: ""
        },
        xlarge_price: {
          type: Number,
          trim: true,
          default: ""
        }

      }


    }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
