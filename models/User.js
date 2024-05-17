import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Method to compare passwords

// Compile model from schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
