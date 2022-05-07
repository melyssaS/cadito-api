const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const { post_id } = req.query;
  try {
    if (post_id) {
      const posts = await Post.findById(post_id);
      res.status(200).json(posts);
    } else {
      const { user_id } = req.query;
      const posts = await Post.find({ owner_id: user_id });
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getRecentPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { createPost, getPosts, getRecentPosts };
