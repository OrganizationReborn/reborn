const mongoose = require('mongoose');

const afkSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
    userID: String,
	reason: String,
    messagesLeft: {type: Number, default: 0 }
});

module.exports = new mongoose.model(`AFK`, afkSchema);