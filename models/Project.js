const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An issue must have a name"],
      unique: true,
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

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "A project must have a name"],
      trim: true,
    },
    issues: [issueSchema],
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

module.exports = Project;
