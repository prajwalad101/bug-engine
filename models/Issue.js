import mongoose from "mongoose";
import commentSchema from "./Comment";

const Schema = mongoose.Schema;

const issueSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "An issue must have a name"],
      trim: true,
      minlength: 10,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "An issue must have a description"],
      trim: true,
      minlength: 50,
      maxlength: 1000,
    },
    priority: {
      type: String,
      required: [true, "An issue must have a priority"],
      default: "Notset",
      enum: {
        values: ["High", "Medium", "Low", "Notset"],
        message: "Priority should be either high, medium or low",
      },
    },
    assignees: { type: Array, default: [] },
    submitter: {
      type: Object,
      required: [true, "An issue must have a submitter"],
    },
    type: {
      type: String,
      required: [true, "An issue must have a type"],
    },
    status: {
      type: String,
      required: [true, "An issue must have a status"],
      default: "Open",
      enum: {
        values: ["Open", "Completed"],
        message: "Status should be open or completed",
      },
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default issueSchema;
