require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); 

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/messageApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.use("/api", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
