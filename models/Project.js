import mongoose from "mongoose";
import issueSchema from "./Issue";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "A project must have a name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "A project must have a description"],
      trim: true,
    },
    issues: [issueSchema],
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
