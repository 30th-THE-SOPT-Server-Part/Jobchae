import { Router } from "express";
import ReviewController from "../controllers/ReviewController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post('/movies/:movieId', [
    body('title').notEmpty(),
    body('writer').notEmpty(),
    body('content').notEmpty()
], ReviewController.createReview);

router.get('/movies/:movieId', ReviewController.getReviews);

export default router; 