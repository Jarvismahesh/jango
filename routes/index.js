var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'mahesh',cls:'II M.C.A',roll:23});

});

module.exports = router;
