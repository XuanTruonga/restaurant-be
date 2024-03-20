import userRoutes from "./user";
import categoryRoutes from "./category";
import productRoutes from "./product";
import areaRoutes from "./area";
import tableRoutes from "./table";

export const routes = [
  { ...userRoutes },
  { ...categoryRoutes },
  { ...productRoutes },
  { ...areaRoutes },
  { ...tableRoutes },
];
