import { Router } from "express";
import { getAllShops, getShopById } from "../controllers/ShopController";

const router = Router();

router.get("/", getAllShops);
router.get("/:id", getShopById);

export default router;
