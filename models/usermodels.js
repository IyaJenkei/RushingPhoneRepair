const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: { type: String},
	email: { type: String },
	password: { type: String },
	phone: { type: String },
	created: { type: String }
});

userSchema.methods.apiRepr = function () {
	return {
		id: this._id,
		name: this.name,
		email: this.email,
		password: this.password,
		phone: this.phone,
		created: this.created
	};
}

const User = mongoose.model('User', userSchema);

module.exports = { User };