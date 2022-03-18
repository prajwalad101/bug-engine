import mongoose from "mongoose";

const Schema = mongoose.Schema;

const assigneeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "An assignee must have a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "An assignee must have an email"],
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Assignee =
  mongoose.models.Assignee || mongoose.model("Assignee", assigneeSchema);

export default Assignee;
