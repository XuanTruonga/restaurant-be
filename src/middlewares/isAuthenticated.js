import { getUserFromToken } from "./utils";

const isAuthenticated = (req, res, next) => {
  getUserFromToken(req, res, (user) => {
    if (req.originalUrl.endsWith("/verify-token")) {
      res.locals.myData = user;
    }
    next();
  });
};

export default isAuthenticated;
