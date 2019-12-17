const express = require('express');
const authRouter = express.Router();
const { postSignUp } = require('./../controllers/auth');

authRouter.post('/signup', postSignUp);

module.exports = authRouter;
