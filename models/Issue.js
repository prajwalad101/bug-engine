const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
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
    },
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
