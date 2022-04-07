import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, "An comment must have a body"],
      trim: true,
    },
    sender: {
      type: Object,
      required: [true, "A comment must have a sender"],
    },
  },
  { timestamps: true }
);

export default commentSchema;
