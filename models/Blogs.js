import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Method to compare passwords

// Compile model from schema
const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);

export default Blogs;
