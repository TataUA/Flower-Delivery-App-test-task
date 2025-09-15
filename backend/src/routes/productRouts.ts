import { Router } from "express";
import {
  getProducts,
  getProductsByShop,
} from "../controllers/ProductController";

const router = Router();

router.get("/:id", getProductsByShop);
router.post("/products-by-id", getProducts);

export default router;
