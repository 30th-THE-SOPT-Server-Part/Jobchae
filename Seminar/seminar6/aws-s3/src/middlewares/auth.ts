import { reverse } from "dns";
import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import config from "../config";

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(' ').reverse()[0];

    // 토큰 유무 검증
    if (!token) {
        return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.NULL_VALUE_TOKEN));
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret); // verify

        req.body.user = (decoded as any).user;
        
        next(); // next -> middleware 실행 끝나면 다음으로 넘어가게
    } catch (error) {
        console.log(error);

        if (error.name === 'TokenExpiredError') {
            return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_TOKEN));
        } 

        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}