import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  day: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  width: {
    type: String,
    required: true,
    trim: true,
  },
  height: {
    type: String,
    required: true,
    trim: true,
  },
  long: {
    type: String,
    required: true,
    trim: true,
  },
  weight: {
    type: String,
    required: true,
    trim: true,
  },
  fragile: {
    type: Boolean,
    required: true,
    trim: true,
  },
  pickAddress: {
    type: String,
    required: true,
    trim: true,
  },
  pickCity: {
    type: String,
    required: true,
    trim: true,
  },
  senderId: {
    type: String,
    required: true,
    trim: true,
  },
  senderName: {
    type: String,
    required: true,
    trim: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
    trim: true,
  },
  deliveryCity: {
    type: String,
    required: true,
    trim: true,
  },
  receiverId: {
    type: String,
    required: true,
    trim: true,
  },
  receiverName: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  creator: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Order", orderSchema);
