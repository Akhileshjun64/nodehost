const mongoose = require("mongoose");
const dbURI_CLOUD =
  "mongodb+srv://akhileshjun64:" +
  encodeURIComponent("Technet@mongodatabase") +
  "@cluster0.pz5ucer.mongodb.net/your-database-name";

mongoose.connect(dbURI_CLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
