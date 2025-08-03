import express  from "express";
const router = express.Router();
import { userMiddleware } from "../middlewares/user.js";
import { signin, signup, getusers} from "../controllers/UserRoutesControllers.js";


router.post('/signup', signup);

router.post('/signin',userMiddleware,signin);

router.get('/adminAccess',userMiddleware,getusers);


export default router;