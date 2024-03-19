import express from "express";
import * as productController from "../../controllers/product.controller";
import isAuthenticated from "../../middlewares/isAuthenticated";

const productRoute = express.Router();

productRoute.get("", isAuthenticated, productController.getAll);
productRoute.post("/create", isAuthenticated, productController.create);
productRoute.get("/by-id/:id", isAuthenticated, productController.findById);
productRoute.post("/update/:id", isAuthenticated, productController.update);

export default productRoute;
