import express from "express";
import * as userController from "../../controllers/user.controller";
import isAuthenticated from "../../middlewares/isAuthenticated";
import isAdmin from "../../middlewares/isAdmin";

const authRoute = express.Router();

authRoute.get("", isAdmin, userController.getAll);
authRoute.post("/create", userController.create);
authRoute.get("/verify-token", isAuthenticated, userController.verifyToken);
authRoute.post("/sign-in", userController.login);
authRoute.get("/by-id/:id", userController.findById);
authRoute.post("/update/:id", userController.update);

export default authRoute;
