import { Router } from "express";
import {
  getAllShops,
  getShopById,
  getProductsByShop,
} from "../controllers/ShopController";

const router = Router();

router.get("/", getAllShops);
router.get("/:id", getShopById);
router.get("/:id/products", getProductsByShop);

export default router;
