import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
