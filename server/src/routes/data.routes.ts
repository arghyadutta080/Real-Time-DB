import { Router } from "express";
import {
    getDataHandler,
    createDataHandler,
    updateDataHandler,
    deleteDataHandler,
} from "../controllers/data.controller";

const router = Router();

router.get("/", getDataHandler);
router.post("/", createDataHandler);
router.put("/:id", updateDataHandler);
router.delete("/:id", deleteDataHandler);

export default router;
