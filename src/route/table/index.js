import tableRoute from "./table.route";

const tableRoutes = {
  prefix: "/",
  routes: [
    {
      path: "table",
      route: tableRoute,
    },
  ],
};

export default tableRoutes;
