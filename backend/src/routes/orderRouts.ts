import { Router } from "express";
import { createOrder } from "../controllers/OrderController";

const router = Router();

router.post("/", createOrder);

export default router;
