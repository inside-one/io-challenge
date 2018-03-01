'use strict';
var UserCtrl = require("../../controller/user");

var path = require('path');

exports.show = function(req, res) {
	UserCtrl.show(req).then(function(data) {
		res.send(200, data);
	}, function(err) {
		log.error(err);
		res.send(err.code, err.error);
	});
};