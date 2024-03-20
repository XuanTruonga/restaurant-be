import express from "express";
import * as categoryController from "../../controllers/category.controller";
import isAuthenticated from "../../middlewares/isAuthenticated";

const categoryRoute = express.Router();

categoryRoute.get("", isAuthenticated, categoryController.getAll);
categoryRoute.post("/create", isAuthenticated, categoryController.create);
categoryRoute.get("/by-id/:id", isAuthenticated, categoryController.findById);
categoryRoute.post("/update/:id", isAuthenticated, categoryController.update);
categoryRoute.delete(
  "/delete/:id",
  isAuthenticated,
  categoryController.deleteById
);

export default categoryRoute;
