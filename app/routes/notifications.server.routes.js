'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
	app.route('/notifications').get(function(req, res){
		res.json('test');
	});	
};
