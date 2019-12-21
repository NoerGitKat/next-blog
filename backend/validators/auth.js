const { check } = require('express-validator');

exports.userSignUpValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required'),
	check('email')
		.isEmail()
		.withMessage('Email must be valid'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long'),
];

exports.userSignInValidator = [
	check('email')
		.isEmail()
		.withMessage('Email must be valid'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long'),
];
