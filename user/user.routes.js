//Import Controllers
import Auth from "../utility/auth.js";
import userController from "./user.controller.js";
//Create a Controllers
const user = new userController();
//Export Router
export default function (router) {
  //Custom Services
  router.post("/api/user/login", user.userLogin);
  router.post(
    "/api/user/updatepassword",
    Auth.authentication,
    user.updatePassword
  );

  //CRUD Services
  router.post("/api/user", user.userSignUp);
  //Secure Endpoints
  router.get("/api/user/:id", Auth.authentication, user.findUserById);
  router.get("/api/user", Auth.authentication, user.findAll);

  router.put("/api/user", Auth.authentication, user.updateUser);
  router.delete("/api/user/:id", Auth.authentication, user.deleteUser);
}
