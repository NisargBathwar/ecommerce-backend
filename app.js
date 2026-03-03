require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("DB Error:", err));

app.get("/", (req, res) => {
  res.send("Ecommerce Backend Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});