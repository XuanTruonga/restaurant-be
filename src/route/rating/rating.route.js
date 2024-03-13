import express from "express";
import {
  create,
  findRatingsByBookId,
  getAll,
  update,
  deleteRatings
} from "../../controllers/rating.controller";

const ratingRoute = express.Router();

ratingRoute.get("", getAll);
ratingRoute.post("/create", create);
ratingRoute.get("/get-by-book/:id", findRatingsByBookId);
ratingRoute.put("/:id", update);
ratingRoute.delete("/:id", deleteRatings);

export default ratingRoute;
