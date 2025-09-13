import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import shopRouter from "./routes/shopRoutes";
import userRouter from "./routes/userRoutes";
import orderRouter from "./routes/orderRouts";

interface IError {
  status?: number;
  message?: string;
}

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/shops", shopRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
