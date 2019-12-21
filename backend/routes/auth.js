const express = require('express');
const authRouter = express.Router();
const { postSignUp, postSignIn } = require('./../controllers/auth');

// Validators
const { runValidation } = require('./../validators');
const { userSignUpValidator, userSignInValidator } = require('./../validators/auth');

authRouter.post('/signup', [userSignUpValidator, runValidation], postSignUp);
authRouter.post('/signin', [userSignInValidator, runValidation], postSignIn);

module.exports = authRouter;
