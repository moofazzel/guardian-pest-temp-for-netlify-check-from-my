import mongoose from "mongoose";

export const subscriptionServiceSchema = new mongoose.Schema({
  subscriptionPrice: {
    type: String,
    required: true,
  },
  initialPriceCheckbox: {
    type: Boolean,
  },
  initialPrice: {
    type: String,
  },
});
