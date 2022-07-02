const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	carName: {
		type: String,
		required: [true, "car Name is required"],
		unique: [true, "car Name Already Exists"],
	},
	reg: {
		type: String,
		required: [true, "Registration number required"],
		min: [12, "Too Few. Not valid number."],
		max: [12, "Too long. Not valid number."],
	},
	carColor: {
		type: String,
		required: [true, "color is required"],
		trim: true,
		lowercase: true,
		unique: [true, "color invalid"],
	},
	type: {
		type: String,
		required: [true, "Type can't be blank"],
	},
	showroom: {
		type: String,
	},
	description: {
		type: String,
		required: [true, "description can't be blank"],
	},
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
