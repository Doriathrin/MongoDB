// 引入express
var express = require('express');
// 引入router
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/api', function (req, res, next) {
  res.render('error')
})
module.exports = router;
