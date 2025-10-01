import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../controller/task.controller.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();
router.use(authMiddleware);
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.put("/toggle/:id", toggleTaskStatus);

export default router;
