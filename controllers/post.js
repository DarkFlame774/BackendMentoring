import { Post } from "../models/post.js";
import { User } from "../models/user.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, category, userId } = req.body;
    const post = await Post.create({ title, content, category, user: userId });
    console.log(post);
    const user = await User.findById(userId);
    console.log(user);
    user.posts.push(post._id);
    await user.save();
    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.status(200).json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate("user");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post fetched successfully", post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
