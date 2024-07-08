const { default: mongoose } = require("mongoose");

export async function connectDB() {
  try {
    const DB = mongoose.connect(process.env.MONGODB_URI);
    if (DB) {
      console.log("Database connected successfully 😎");
    }
  } catch (error) {
    console.log("Database connected failed ⚠");
    console.log(error.message);
  }
}
