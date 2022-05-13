import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import ReviewService from "../services/ReviewService";
const { validationResult } = require('express-validator');

/**
 *  @route POST /review/movies/:movieId
 *  @desc Create Review
 *  @access Public
 */
const createReview = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    const reviewCreateDto: ReviewCreateDto = req.body;
    const { movieId } = req.params;

    try {
        const data = await ReviewService.createReview(movieId, reviewCreateDto);
        
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route GET /review/movies/:movieId
 *  @desc Get Review
 *  @access Public
 */
const getReviews = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const data = await ReviewService.getReviews(movieId);

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    } 
}

export default {
    createReview,
    getReviews
}