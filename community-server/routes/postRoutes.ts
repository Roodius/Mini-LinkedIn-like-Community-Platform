import express  from "express";
import { userMiddleware } from "../middlewares/user.js";
const router = express.Router();
import { getpostsById,craetePost,getposts } from "../controllers/postRouteController.js";


router.post('/createpost',userMiddleware,craetePost);
router.get('/AdminAccess',getposts);
router.get('/post/:userId',userMiddleware,getpostsById);

export default router;