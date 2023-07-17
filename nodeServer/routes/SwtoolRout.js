var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('test');
  var o =  {msg : '호랑이'}
  res.send(o);
});

router.get('/tiger', function(req, res, next) {
    console.log(req.query);
    if(req.query.type === 'list'){
        console.log('OK');
        req.body.lion ='리스트';
        console.log(req.body);
    }

    var o =  {msg : '호랑이'}
    res.send(o);
});

module.exports = router;