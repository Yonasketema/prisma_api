import { Router } from "express";
import { body } from "express-validator";

import { createUser, signin } from "./handler/user";
import { handleValidationErrors } from "./modules/middlewares";
import {
  createPost,
  deletePost,
  getOnePost,
  getPosts,
  updatePost,
} from "./handler/post";
import { protect } from "./modules/auth";

const router = Router();

/**
 * Post Route
 */

router.get("/post", getPosts);
router.get("/post/:id", getOnePost);
router.post(
  "/post",
  protect,
  body("title").exists().isString(),
  body("post").exists().isString(),
  createPost
);
router.put(
  "/post/:id",
  protect,
  body("title").optional().isString(),
  body("post").optional().isString(),
  updatePost
);
router.delete("/post/:id", protect, deletePost);

/**
 * Auth Route
 */

router.post(
  "/signup",
  body("name").exists().isString(),
  body("email").exists().isString().isEmail(),
  body("password").exists().isString(),
  handleValidationErrors,
  createUser
);

router.post(
  "/signin",
  body("email").exists().isString().isEmail(),
  body("password").exists().isString(),
  signin
);

export default router;
