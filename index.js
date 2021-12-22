import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "variables.env" });

import orderRoutes from "./routes/order.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/order", orderRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL = process.env.MONGO;
const PORT = process.env.PORT || 4000;

app.get("/", (_, res) => {
  res.send({ message: "Hello WWW!" });
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`))
  )
  .catch((error) => console.log(error));
