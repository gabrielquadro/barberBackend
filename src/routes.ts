import { Router , Response , Request} from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get("/teste", ( req : Request, res : Response) => {
    return res.json({ ok : true })
})

//User routes
router.post("/user", new CreateUserController().handle)

export {router}