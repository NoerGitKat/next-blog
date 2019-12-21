const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('./../db/models/User');

exports.postSignUp = (req, res) => {
	const {
		body: { name, email, password },
	} = req;

	// First check if user already exists
	User.findOne({ email }).exec((err, user) => {
		// If there's a user send feedback that email is already taken
		if (user) {
			return res.status(422).json({ error: 'Email is already taken!' });
		} else {
			// Else, create new user
			let username = shortId.generate();
			let profile = `${process.env.CLIENT_URL}/profile/${username}`;

			let newUser = new User({ name, email, password, profile, username });

			newUser.save((err, success) => {
				// If user didn't get saved, send feedback with error
				if (err) {
					return res.status(400).json({ error: err });
				}
				return res.status(200).json({ user: success });
			});
		}
	});
};

exports.postSignIn = (req, res) => {
	const {
		body: { email, password },
	} = req;
	// First check if user already exists
	User.findOne({ email }).exec((err, user) => {
		if (err || !user) {
			return res.status(422).json({ error: 'Email is not found! Please signup for an account.' });
		}

		// Check if password is correct in order to authenticate
		if (!user.authenticate(password)) {
			return res.status(422).json({
				error: 'Email and password do not match!',
			});
		}

		// If authenticated generate token to send to client
		const authToken = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

		// Set authToken as cookie
		res.cookie('authToken', authToken, { expiresIn: '1d' });

		// Only send id, username, name and email
		const { _id, username, name, email } = user;

		return res.status(200).json({
			authToken,
			user: { _id, username, name, email },
		});
	});
};
