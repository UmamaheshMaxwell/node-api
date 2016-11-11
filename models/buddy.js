var mongoose = require("mongoose");
var buddySchema = mongoose.Schema({
	name: { 
		type: String, 
		index: true 
	},
	mobile: {
		type: Number
	}
});

module.exports = mongoose.model("buddy", buddySchema);