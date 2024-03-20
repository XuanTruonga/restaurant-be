import express from "express";
import * as userController from "../../controllers/user.controller";
import isAuthenticated from "../../middlewares/isAuthenticated";
import isAdmin from "../../middlewares/isAdmin";

const authRoute = express.Router();

authRoute.get("", isAuthenticated, userController.getAll);
authRoute.post("/create", isAuthenticated, userController.create);
authRoute.get("/verify-token", isAuthenticated, userController.verifyToken);
authRoute.post("/sign-in", userController.login);
authRoute.get("/by-id/:id", isAuthenticated, userController.findById);
authRoute.post("/update/:id", isAuthenticated, userController.update);

export default authRoute;
