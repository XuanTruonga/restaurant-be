import express from "express";
import * as areaController from "../../controllers/area.controller";
import isAuthenticated from "../../middlewares/isAuthenticated";

const areaRoute = express.Router();

areaRoute.get("", isAuthenticated, areaController.getAll);
areaRoute.post("/create", isAuthenticated, areaController.create);
areaRoute.get("/by-id/:id", isAuthenticated, areaController.findById);
areaRoute.post("/update/:id", isAuthenticated, areaController.update);
areaRoute.delete(
  "/delete/:id",
  isAuthenticated,
  areaController.deleteById
);

export default areaRoute;
