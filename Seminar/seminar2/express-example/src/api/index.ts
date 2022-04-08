import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/user', require('./user'));

module.exports = router;

