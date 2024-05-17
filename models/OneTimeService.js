import mongoose from "mongoose";

export const oneTimeServiceSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  followUpCheckbox: {
    type: Boolean,
  },
  followUpPrice: {
    type: String,
  },
});
