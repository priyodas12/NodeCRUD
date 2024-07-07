import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	mobile: {
		type: Number,
		required: true,
    },
	address: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		required: true,
	},
} );

export default mongoose.model( "users", userSchema );