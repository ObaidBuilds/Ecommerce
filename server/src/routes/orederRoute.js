import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/orderController.js";

const ordeRouter = express.Router();

ordeRouter.get("/", getAllOrders);
ordeRouter.post("/", createOrder);
ordeRouter.get("/:id", getOrderById);
ordeRouter.patch("/:id", updateOrder);

export default ordeRouter;
