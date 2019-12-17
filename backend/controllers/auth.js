exports.getAuth = (req, res) => {
	res.json({ msg: 'gotten auth!' });
};

exports.postSignUp = (req, res) => {
	const {
		body: { name, email, password },
	} = req;

	res.send(`it works ${name}`);
};
