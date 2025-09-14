import { Router } from "express";
import { getProductsByShop } from "../controllers/ProductController";

const router = Router();

router.get("/:id", getProductsByShop);

export default router;
