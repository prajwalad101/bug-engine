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
      default: "notset",
      enum: {
        values: ["High", "Medium", "Low", "notset"],
        message: "Priority should be either high, medium or low",
      },
    },
    developers: [{ type: Schema.Types.ObjectId, ref: "Developer" }],
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
      default: "open",
      enum: {
        values: ["open", "completed"],
        message: "Status should be open or completed",
      },
    },
  },
  { timestamps: true }
);

export default issueSchema;
