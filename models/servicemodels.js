const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
	model: {type: String},
	screencolor: {type: String},
	service: {type: String},
	comment: {type: String},
	ordered: { type: Date },
	finished: { type: Date },
	partsArrived: { type: Date },
	dropOffDate: { type: Date}
});

serviceSchema.methods.apiRepr = function () {
	return {
		id: this._id,
		model: this.model,
		screencolor: this.screencolor,
		service: this.service,
		comment: this.comment,
		orderdate: this.ordered
	};
}

const service = mongoose.model('Service', serviceSchema);

module.exports = { service };