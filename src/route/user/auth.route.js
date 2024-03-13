import express from "express";
import {
  create,
  findById,
  getAll,
  login,
  authorization,
} from "../../controllers/user.controller";
import checkAuth from "../../middlewares/checkAuth";
import verifyToken from "../../middlewares/authenticateToken";

const authRoute = express.Router();

authRoute.get("", getAll);
authRoute.post("/create", create);
authRoute.get("/get-by-id/:id", findById);
authRoute.get("/verify-token", verifyToken, authorization);

authRoute.post("/sign-in", checkAuth, login);

export default authRoute;
