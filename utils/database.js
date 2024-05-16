import mongoose from "mongoose";
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "blog" });
  } catch (error) {
    console.log(error.message);
  }
}

export default connectToDB;