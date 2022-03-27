import mongoose from "mongoose";
import issueSchema from "./Issue";

const Schema = mongoose.Schema;

// Changed issue status to <Verify> <User> on <Project>

const activitySchema = new Schema(
  {
    projectName: {
      type: String,
      required: [true, "An activity must have a project name"],
    },
    action: {
      type: String,
      required: [true, "An activity must have an action "],
      enum: {
        values: ["create", "update", "delete"],
      },
    },
    user: {
      type: String,
      required: [true, "An activity must have an user"],
    },
    issue: issueSchema,
  },
  {
    timestamps: true,
  }
);

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
