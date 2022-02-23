const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "A project must have a name"],
    trim: true,
  },
  createdOn: {
    type: Date,
    required: [true, "A project must have a date"],
  },
  issues: {
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
    submittedOn: {
      type: Date,
      required: [true, "An issue must have a submitted date"],
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
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
