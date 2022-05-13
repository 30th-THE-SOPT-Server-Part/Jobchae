import { Router } from "express";
import ReviewController from "../controllers/ReviewController";
import { body } from "express-validator/check";
import auth from "../middlewares/auth";

const router: Router = Router();

router.post('/movies/:movieId', [
    body('title').notEmpty(),
    body('writer').notEmpty(),
    body('content').notEmpty()
], ReviewController.createReview);

router.get('/movies/:movieId', auth, ReviewController.getReviews);

export default router; 