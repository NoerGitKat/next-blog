const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define blueprint for User model
const UserSchema = new Schema(
	{
		username: {
			type: String,
			trim: true,
			required: true,
			max: 32,
			unique: true,
			index: true,
			lowercase: true,
		},
		name: {
			type: String,
			trime: true,
			required: true,
			max: 32,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
		},
		profile: {
			type: String,
			required: true,
		},
		hashed_password: {
			type: String,
			required: true,
		},
		salt: String,
		about: {
			type: String,
		},
		role: {
			type: Number,
			trim: true,
		},
		photo: {
			data: Buffer,
			contentType: String,
		},
		resetPasswordLink: {},
	},
	{ timestamps: true }
);

// This is a property that's not stored in DB
UserSchema.virtual('password')
	// Needs to be ES5 in order to create 'this'
	.set(function(password) {
		// Temp variable _password
		this._password = password;

		// Generate salt for encrypting password
		this.salt = this.makeSalt();
		console.log('this.salt', this.salt);
		// Encrypt password
		this.hashed_password = this.encryptPassword(password);
		console.log('hashed password', this.hashed_password);
	})
	.get(() => this._password);

// Add new methods to schema
UserSchema.methods = {
	authenticate: function(plainPassword) {
		// Compare encrypted password with hashed password
		return this.encryptPassword(plainPassword) === this.hashed_password;
	},
	encryptPassword: function(password) {
		// Check if there's password
		if (!password) {
			return '';
		}

		try {
			return crypto
				.createHmac('sha1', this.salt)
				.update(password)
				.digest('hex');
		} catch (error) {
			return '';
		}
	},
	makeSalt: () => {
		return Math.round(new Date().valueOf() * Math.random() + '');
	},
};

const User = mongoose.model('User', UserSchema) || mongoose.models.User;

module.exports = User;
