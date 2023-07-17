var express = require('express');
var router = express.Router();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: 'db01',
    user: "root",
    password: "1234",
});

router.get('/users', (req, res, next) => {
    try {
        connection.query('select * from t_temp01',
            (error, rows, field) => {
                console.log('rows ', rows);
                res.send(rows);
            })
    } catch (error) {
        console.log('error')
    }
});

router.post('/user', (req, res, next) => {
    try {
        // var s  = `insert into t_temp01 (name1,name2) values ( '${req.body.name}', '${req.body.email}')`;
        connection.query('INSERT INTO t_temp01(name1, name2) VALUES(?, ?)', [req.body.name, req.body.email]);
        res.status(200).json({ response: 'register user' });
    } catch (error) {
        console.log('error')
    }
});

router.delete('/user/:id', (req, res, next) => {
    try {
        console.log(req.params.id);
        connection.query('delete from t_temp01 where id = ?', [req.params.id]);
        res.status(200).json({ response: 'register user' });
    } catch (error) {
        console.log('error')
    }
});

router.post('/user', (req, res, next) => {
    try {
        // var s  = `insert into t_temp01 (name1,name2) values ( '${req.body.name}', '${req.body.email}')`;
        connection.query('INSERT INTO t_temp01(name1, name2) VALUES(?, ?)', [req.body.name, req.body.email]);
        res.status(200).json({ response: 'register user' });
    } catch (error) {
        console.log('error')
    }
});

module.exports = router;