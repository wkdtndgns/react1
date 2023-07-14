var express = require('express');

var app = express();

// 
http://localhost:5000/users
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/users', require('./routes/users'));

var port = process.env.PORT || '5001';
app.listen(port, ()=>{console.log('listen');} );

module.exports = app; 