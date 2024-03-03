import { Router } from "express";
import { createUser, signin } from "./handler/user";

const router = Router();

/**
 * Product Route
 */

router.get("/product", (req, res) => {
  console.log(req.query);
  res.json({ message: "hello" });
});

router.post("/product", () => {});
router.put("/product/:id", () => {});
router.get("/product/:id", () => {});
router.delete("/product/:id", () => {});

/**
 * Auth Route
 */

router.post("/signup", createUser);
router.post("/signin", signin);

export default router;
