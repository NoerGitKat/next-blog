const User = require('./../db/models/User');
const shortId = require('shortid');

exports.postSignUp = (req, res) => {
	const {
		body: { name, email, password },
	} = req;

	// First check if user already exists
	User.findOne({ email }).exec((err, user) => {
		// If there's a user send feedback that email is already taken
		if (user) {
			return res.status(400).json({ error: 'Email is already taken!' });
		} else {
			// Else, create new user
			let username = shortId.generate();
			let profile = `${process.env.CLIENT_URL}/profile/${username}`;

			let newUser = new User({ name, email, password, profile, username });

			newUser.save((err, success) => {
				// If user didn't get save, send feedback with error
				if (err) {
					return res.status(422).json({ error: err });
				}
				return res.status(200).json({ user: success });
			});
		}
	});
};
