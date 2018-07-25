import mongoose from 'mongoose'

const mongoConnect= async () => {
  let {
    MONGO_URI,
    DB_NAME,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_PORT
  } = process.env;

  let authStr = (MONGO_USER && MONGO_PASSWORD) ? `${MONGO_USER}:${MONGO_PASSWORD}@` : ''; 
  if (!MONGO_PORT) {
    MONGO_PORT = 27017;
  }

  if (!MONGO_URI) {
    MONGO_URI = 'localhost'
  }
  try {
    await mongoose.connect(
      `mongodb://${authStr}${MONGO_URI}:${MONGO_PORT}/${DB_NAME}`,
      {}
    );
    return `successfully connected to ${DB_NAME}`;
  } catch (err) {
    console.log('err',err)
    throw new Error("failed to connect to MongoDB");
  }
};

export default mongoConnect;