var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register/buyer');
});

router.post('/auth',function(req,res,next){
	res.send("aa");
	res.end();
});

module.exports = router;
