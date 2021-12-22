import Order from "../models/order.js";
import mongoose from "mongoose";

export const getOrders = async (_, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createOrder = async (req, res) => {
  const order = req.body;
  const newOrder = new Order({ ...order, creator: req.userId });
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updateOrder = async (req, res) => {
  const { id: _id } = req.body;
  const { status } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Order found.");
  const updatedOrder = await Order.findByIdAndUpdate(
    _id,
    { status, _id },
    {
      new: true,
    }
  );
  res.json(updatedOrder);
};
