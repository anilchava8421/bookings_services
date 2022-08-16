//Import modules or path's
import Router from "express";
import userRoutes from "./user/user.routes.js";
import cinemaRoutes from "./cinema/cinema.routes.js";
//Create Router Instance
const router = new Router();
userRoutes(router);
cinemaRoutes(router);
//Export router
export default router;
