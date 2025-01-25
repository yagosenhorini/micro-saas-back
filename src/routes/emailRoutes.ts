import { Router } from "express";
import { getEmails, sendEmailController} from "../controllers/emailController";
import {authenticateToken} from "../middlewares";

const router = Router();

router.post("/send-email", authenticateToken, sendEmailController);
router.get("/get-email", authenticateToken, getEmails);

export default router;
