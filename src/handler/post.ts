import prisma from "../db";
import { Request, Response, NextFunction } from "express";

export const getPosts = async (req, res) => {
  const posts = await prisma.post.findMany();

  res.status(200).json({
    status: "success",
    data: posts,
  });
};

export const getOnePost = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      author: true,
    },
  });

  res.status(200).json({
    status: "success",
    data: post,
  });
};

export const createPost = async (req, res) => {
  const post = await prisma.post.create({
    data: {
      rating: 1,
      title: req.body.title,
      userId: req.user.id,
      post: req.body.post,
    },
  });

  res.status(201).json({
    status: "success",
    data: post,
  });
};

export const updatePost = async (req, res) => {
  const post = await prisma.post.update({
    where: {
      id: req.params.id,
      userId: req.user.id,
    },
    data: {
      title: req.body.title,
      post: req.body.post,
    },
  });

  res.status(201).json({
    status: "success",
    data: post,
  });
};

export const deletePost = async (req, res) => {
  const post = await prisma.post.delete({
    where: {
      id: req.params.id,
      userId: req.user.id,
    },
  });

  res.status(201).json({
    status: "success",
    data: post,
  });
};
