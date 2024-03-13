import express from "express";

import verifyToken from "../../middlewares/authenticateToken";
import {
  create,
  deleteBook,
  findById,
  findByIsbn,
  getAll,
  getBookDetailsWithRatings,
  searchBooks,
  update,
} from "../../controllers/book.controller";

const bookRoute = express.Router();
const isbnRoute = express.Router();

bookRoute.get("", getAll);
bookRoute.post("/create", create);
bookRoute.get("/get-by-id/:id", findById);
bookRoute.put("/:id", update);
bookRoute.delete("/:id", deleteBook);

bookRoute.get("/search", searchBooks);
bookRoute.get("/search/:id", getBookDetailsWithRatings);

// get isbn in book
isbnRoute.get("/:id", findByIsbn);

//
export { isbnRoute };

export default bookRoute;
