import express from "express";
import { auth } from "../middlewares/authMiddleware.js";
import { createLog, getLogs, getUsage } from "../controllers/logController.js";

const router = express.Router();


router.post("/:id/logs", auth, createLog);
router.get("/:id/logs", auth, getLogs);
router.get("/:id/usage", auth, getUsage);

export default router;
