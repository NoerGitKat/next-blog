const express = require('express');
const authRouter = express.Router();
const { postSignUp } = require('./../controllers/auth');

// Validators
const { runValidation } = require('./../validators');
const { userSignUpValidator } = require('./../validators/auth');

authRouter.post('/signup', [userSignUpValidator, runValidation], postSignUp);

module.exports = authRouter;
