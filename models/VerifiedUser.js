import mongoose from "mongoose";

const Schema = mongoose.Schema;

const verifiedUserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const VerifiedUser =
  mongoose.models.VerifiedUser ||
  mongoose.model("VerifiedUser", verifiedUserSchema);

export default VerifiedUser;
