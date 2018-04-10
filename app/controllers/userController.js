const User = require("../models/user")

exports.update = function(id, body, cb) {
	User.findOneAndUpdate({_id: id}, body, {new: true}, function(err, user) {
		cb(err, user)
	})
}