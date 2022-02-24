const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An issue must have a name"],
      trim: true,
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
      enum: {
        values: ["no status", "in progress", "completed"],
        message: "Status should be either no status, in progress or completed",
      },
    },
  },
  { timestamps: true }
);

export default issueSchema;
