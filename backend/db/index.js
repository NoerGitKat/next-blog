const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	const connection = await mongoose.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
	if (connection) {
		console.log('Connected to database!');
	} else {
		console.log('Oh no! Connection error!');
	}
};

module.exports = connectDB;
