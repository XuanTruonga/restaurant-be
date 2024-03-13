import bookRoute, { isbnRoute } from "./book.route";

const bookRoutes = {
  prefix: "/",
  routes: [
    {
      path: "books",
      route: bookRoute,
    },
    {
      path: "isbn",
      route: isbnRoute,
    },
  ],
};

export default bookRoutes;
