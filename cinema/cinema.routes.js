//Import Controllers
import Auth from "../utility/auth.js";
import cinemaController from "./cinema.controller.js";
//Create a Controllers
const cinema = new cinemaController();
//Export Router
export default function (router) {
  //CRUD Services
  router.post("/api/book/cinema", Auth.authentication, cinema.bookCinemaTicket);
  router.get(
    "/api/cancel/cinema/:id",
    Auth.authentication,
    cinema.cancelCinemaTicket
  );
}
