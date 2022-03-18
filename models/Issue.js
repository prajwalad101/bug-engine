import mongoose from "mongoose";

const Schema = mongoose.Schema;

const issueSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "An issue must have a name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "An issue must have a description"],
      trim: true,
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
    developers: { type: Array, default: [] },
    submitter: {
      type: String,
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
  },
  { timestamps: true }
);

export default issueSchema;
