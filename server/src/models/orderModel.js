import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  secondContact: {
    type: String,
    required: true,
  },
  famousplace: {
    type: String,
  },
  order: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discountedPrice: {
        type: Number,
        required: true,
      },
      discountPercentage: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      images: {
        type: [String],
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      selectedSize: {
        type: String,
        required: true,
      },
    },
  ],
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
