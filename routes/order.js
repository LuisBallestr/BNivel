import express from "express";
import { getOrders, createOrder, updateOrder } from "../controllers/order.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getOrders);

router.post("/create-order", auth, createOrder);

router.patch("/update-order", auth, updateOrder);

export default router;
