import mongoose from "mongoose";
import { googleReviewsSchema } from "./GoogleReviews";

const homePageSchema = new mongoose.Schema({
  slogan: {
    type: String,
  },
  googleReviews: [googleReviewsSchema],
});

// Compile model from schema
const HomePageModel =
  mongoose.models.HomePageModel ||
  mongoose.model("HomePageModel", homePageSchema);

export default HomePageModel;
