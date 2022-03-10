import mongoose from "mongoose";

const Schema = mongoose.Schema;

const developerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A developer must have a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "A developer must have an email"],
      trim: true,
    },
    // Array of project id's
    // issues: [{ type: Schema.Types.ObjectId, ref: "Issue" }],
  },
  { timestamps: true }
);

const Developer =
  mongoose.models.Developer || mongoose.model("Developer", developerSchema);

export default Developer;
