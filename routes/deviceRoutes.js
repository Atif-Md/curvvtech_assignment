import express from "express"
import {auth} from "../middlewares/authMiddleware.js"
import { deleteDevice, deviceHeartbeat, listDevice, registerDevice, updateDevice } from "../controllers/deviceController.js";

const router = express.Router();

router.post("/",auth, registerDevice);
router.get("/",auth, listDevice);
router.patch("/:id",auth,updateDevice);
router.delete("/:id", auth, deleteDevice);
router.patch("/:id/heartbeat", auth, deviceHeartbeat);

export default router;