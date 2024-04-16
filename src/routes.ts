import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController";
import { ListHaircutsController } from "./controllers/haircut/ListHaircutsController";
import { UpdateHaircutController } from "./controllers/haircut/UpdateHaircutController";
import { DeleteHaircutController } from "./controllers/haircut/DeleteHaircutController";
import { CheckSubscriptionController } from "./controllers/haircut/CheckSubscriptionController";
import { CountHaircutsController } from "./controllers/haircut/CountHaircutsController";
import { DetailHaircutController } from "./controllers/haircut/DetailHaircutController";

const router = Router();

//User routes
router.post("/user", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me", isAuthenticated, new DetailUserController().handle)
router.put("/user", isAuthenticated, new UpdateUserController().handle)
router.get("/check", isAuthenticated, new CheckSubscriptionController().handle)

//Haircut routes
router.post("/haircut", isAuthenticated, new CreateHaircutController().handle)
router.get("/haircuts", isAuthenticated, new ListHaircutsController().handle)
router.put("/haircut", isAuthenticated, new UpdateHaircutController().handle)
router.delete("/haircut", isAuthenticated, new DeleteHaircutController().handle)
router.get("/haircut/count", isAuthenticated, new CountHaircutsController().handle)
router.get("/haircut/detail", isAuthenticated, new DetailHaircutController().handle)

export { router }