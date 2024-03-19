import userRoutes from "./user";
import categoryRoutes from "./category";
import productRoutes from "./product";

export const routes = [
  { ...userRoutes },
  { ...categoryRoutes },
  { ...productRoutes },
];
