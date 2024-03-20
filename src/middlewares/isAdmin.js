import { STATUS } from "../config/status";
import { ErrorHandler, responseError } from "../helpers/response";
import { getUserFromToken } from "./utils";

const isAdmin = (req, res, next) => {
  getUserFromToken(req, res, (user) => {
    if (user && user.role === "ADMIN") {
      next();
    }
    const error = new ErrorHandler(
      STATUS.PERMISSION_DENIED,
      "Không có quyền truy cập (REQUIRED ADMIN)"
    );
    return responseError(res, error);
  });
};

export default isAdmin;
