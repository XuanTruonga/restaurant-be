import express from "express";
import * as tableController from "../../controllers/table.controller";
import isAuthenticated from "../../middlewares/isAuthenticated";

const tableRoute = express.Router();

tableRoute.get("", isAuthenticated, tableController.getAll);
tableRoute.post("/create", isAuthenticated, tableController.create);
tableRoute.get("/by-id/:id", isAuthenticated, tableController.findById);
tableRoute.post("/update/:id", isAuthenticated, tableController.update);
tableRoute.delete(
  "/delete/:id",
  isAuthenticated,
  tableController.deleteById
);

export default tableRoute;
