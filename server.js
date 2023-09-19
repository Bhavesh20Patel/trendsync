import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
// import path from "path";
// config env
dotenv.config();

// database config
connectDb();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, './client/build')))


// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
 
// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-commerce</h1>");
});

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
