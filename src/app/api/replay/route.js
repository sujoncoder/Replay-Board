import { connectDB } from "@/config/DB";
import { Replay } from "@/models/replay.model";

export const POST = async (request) => {
  try {
    await connectDB();
    const jsonBody = await request.json();
    const { title, description } = jsonBody;
    const replay = Replay.create({ title, description });
    return Response.json({ replay });
  } catch (error) {
    console.log(error.message);
  }
};
