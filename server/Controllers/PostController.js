import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userID } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userID === userID) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully!");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userID } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userID)) {
      await post.updateOne({ $push: { likes: userID } });
      res.status(200).json("Post liked!");
    } else {
      await post.updateOne({ $pull: { likes: userID } });
      res.status(200).json("Post Unliked!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTimelinePosts = async (req, res) => {
  const userID = req.params.id;

  try {
    const currentUserPosts = await PostModel.findById({ userID: userID });
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
