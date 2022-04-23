import express, { Router } from "express";

const router: Router = express.Router();

// 나 이런식으로 request param을 써주고 싶은데
// 최종적인 url이 api/blog/:postID/like 이랬으면 좋겠는데. 안되더라?
// router.use("/:postID/like", require("./like"));

router.use("/:postId/like", require("./like"));

module.exports = router;