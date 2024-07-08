export const POST = async (request) => {
  const formData = await request.formData();
  for (const file of formData) {
    console.log(file);
  }
  return Response.json("Ok");
};
