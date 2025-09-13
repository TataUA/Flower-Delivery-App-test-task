import { Router } from "express";
import { createUser, getUser } from "../controllers/UserController";

const router = Router();

router.post("/", createUser);
router.post("/get", getUser);

export default router;
