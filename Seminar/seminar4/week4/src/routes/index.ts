//router index file
import { Router } from 'express';
import ReviewRouter from './ReviewRouter';
import UserRouter from "./UserRouter";

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/review', ReviewRouter);

export default router;