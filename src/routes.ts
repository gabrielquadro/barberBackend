import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

const router = Router();

//User routes
router.post("/user", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me", isAuthenticated , new DetailUserController().handle)
router.put("/user", isAuthenticated , new UpdateUserController().handle)

export { router }