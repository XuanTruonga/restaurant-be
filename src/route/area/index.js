import areaRoute from "./area.route";

const areaRoutes = {
  prefix: "/",
  routes: [
    {
      path: "area",
      route: areaRoute,
    },
  ],
};

export default areaRoutes;
