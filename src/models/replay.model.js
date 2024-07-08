import mongoose from "mongoose";

const replaySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Replay =
  mongoose?.model?.Replay || mongoose.model("Replay", replaySchema);
