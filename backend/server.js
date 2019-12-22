const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

// Routes
const blogRouter = require('./routes/blog');
const authRouter = require('./routes/auth');

// Web server
const app = express();

// Connect to Atlas DB
connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Enable CORS when in development
if (process.env.NODE_ENV === 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// Routes middleware
app.use('/api/blog', blogRouter);
app.use('/api/auth', authRouter);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`The web server is running on port ${PORT}`);
});
