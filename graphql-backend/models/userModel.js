import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required"],
    unique: [true, "Username must be unique"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    lowercase: true,
    validate(value) {
      return /^\S+@\S+\.\S+$/.test(value)
    },
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  created_at: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
});

// Run before each save to DB
userSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

export const User = mongoose.model("User", userSchema);
