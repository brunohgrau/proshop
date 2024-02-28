import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("API is runnning....");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`Server is runing on port ${port}`));
