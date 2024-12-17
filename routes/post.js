import express from "express";
import { createPost, getPostById, getPosts } from "../controllers/post.js";

const app = express.Router();

app.route("/").post(createPost);
app.route("/:id").get(getPostById);
app.route("/").get(getPosts);

export default app;
