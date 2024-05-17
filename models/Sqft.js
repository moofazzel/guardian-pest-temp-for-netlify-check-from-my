import mongoose from "mongoose";

export const sqftSchema = new mongoose.Schema({
  range: {
    type: String,
  },
  monthlyPrice: {
    type: String,
  },
  initialPrice: {
    type: String,
  },
});
