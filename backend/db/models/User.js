const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

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
		salt: { type: String },
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

const User = mongoose.model('User', UserSchema) || mongoose.models.User;

module.exports = User;
