import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  console.log(req.query);
  res.json({ message: "hello" });
});
router.post("/product", () => {});
router.put("/product/:id", () => {});
router.get("/product/:id", () => {});
router.delete("/product/:id", () => {});

export default router;
