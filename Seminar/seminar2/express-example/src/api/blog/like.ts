import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// 내가 원하는 방식으로 하려면 이렇게 해줘야 한대..
// const getRouter = (req: Request, res: Response) => {
//   return res.status(200).json({
//     status: 200,
//     message: "좋아요 성공, post 나도 req body 보고 싶다.",
//   });
// };

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: "좋아요 성공, post 나도 req body 보고 싶다.",
    });
});

module.exports = router;