require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentroute");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("DB Error:", err));

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Student API Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});