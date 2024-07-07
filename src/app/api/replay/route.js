export const POST = async (request) => {
  const jsonBody = await request.json();
  const DBURL = process.env.MONGODB_URI;
  return Response.json({ jsonBody, DBURL });
};
