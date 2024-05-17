import mongoose from "mongoose";

const imageGallerySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },

  relatedImages: {
    type: [String],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

// Method to compare passwords

// Compile model from schema
const ImageGallery =
  mongoose.models.ImageGallery ||
  mongoose.model("ImageGallery", imageGallerySchema);

export default ImageGallery;
