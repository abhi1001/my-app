var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/client', function(req, res, next) {
  res.render('client');
});
router.get('/map', function(req, res, next) {
  res.render('map');
});
router.get('/scandetails', function(req, res, next) {
  res.render('scandetails');
});
module.exports = router;
