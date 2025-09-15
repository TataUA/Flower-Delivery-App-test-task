import { Router } from "express";
import { getUser } from "../controllers/UserController";

const router = Router();

router.post("/get", getUser);

export default router;
