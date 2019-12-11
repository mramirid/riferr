var path = require("path")

module.exports = function(app){
	app.get('/profile', function(req, res, next) {
		res.render("profile/index")
	});
}
