import mongoose from "mongoose";

export const otherServiceSchema = new mongoose.Schema({
  descriptionPrice: {
    type: String,
    required: true,
  },
});
