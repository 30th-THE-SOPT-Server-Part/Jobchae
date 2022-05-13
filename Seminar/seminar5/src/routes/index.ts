//router index file
import { Router } from 'express';
import ReviewRouter from './ReviewRouter';
import UserRouter from "./UserRouter";
import MovieRouter from "./MovieRouter";

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/review', ReviewRouter);
router.use('/movie', MovieRouter);

export default router;