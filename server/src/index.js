import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import router from "./routes/productRoute.js";
import ordeRouter from "./routes/orederRoute.js";

const app = express();

dotenv.config();

const allowedOrigins = ["https://obcommerce.netlify.app","http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  credentials: true,
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/product", router);
app.use("/order", ordeRouter);

app.use("/", (req, res) => {
  res.send("Server working");
});

const PORT = process.env.PORT;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
  });
});

app.use(errorMiddleware);
