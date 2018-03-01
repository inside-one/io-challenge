'use strict';
const Ticket 		= require('../model/ticket');
const Q 		= require('q');

exports.index = function(data) {
	return Q.Promise(function(resolve, reject) {
		Ticket.find()
		.exec((err, tickets) => {
				if (err) return reject({ code: 500, error: err });

				resolve(response)
		});
	});
};


exports.create = function(data) {
	return Q.Promise(function(resolve, reject) {
		Task.create(data.body, (err, task) => {
			if (err) return reject({ code: 500, error: err });
			resolve(task.toJSON());
		});
	});
}
