var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/2', function(req, res, next) {
  console.log('엥');
  var o =  {msg : '호랑이'}
  res.send(o);
});

router.post('/2', function(req, res, next) {
  console.log(req.body.tiger);
  console.log('post');
  res.send(req.body)
});

module.exports = router;
