var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
		res.render('index');
});

module.exports = router;




// var express = require('express');
// var router = express.Router();

// router.get('/', function (req, res, next) {
//     res.render('index');
// });

// //req.params uses the variable you just assigned the url like in /message/:msg it will be the :msg variable
// router.get('/message/:msg', function (req, res, next) {
//     res.render('node', { message: req.params.msg});
// });

// // req.body will parse the body of the request specified by the variable
// router.post('/message', function (req, res, next) {
// 	var message = req.body.message;
// 	res.redirect('/message/' + message);
// });

// module.exports = router;

