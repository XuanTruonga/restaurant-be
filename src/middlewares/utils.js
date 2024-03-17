import jwt from "jsonwebtoken";
import { STATUS } from "../config/status";
import { ErrorHandler, responseError } from "../helpers/response";

export const getUserFromToken = (req, res, callback) => {
  const errorsInvalidToken = new ErrorHandler(
    STATUS.UNAUTHORIZED,
    "Invalid token"
  );
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      const error = new ErrorHandler(STATUS.UNAUTHORIZED, "Token is required");
      return responseError(res, error);
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return responseError(res, errorsInvalidToken);
    }

    jwt.verify(token, process.env.SECRETKEY, (err, user) => {
      if (err) {
        return responseError(res, errorsInvalidToken);
      }
      callback(user);
    });
  } catch (error) {
    return responseError(res, errorsInvalidToken);
  }
};
