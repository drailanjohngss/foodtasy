const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

router.get('/home', (req, res) => {
    db.query("SELECT id FROM business", (err) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            res.send({ express: 'Error' });
            return;
        }else{
            res.send({ express: 'Home' });
        }

        console.log('connected as id ' + connection.threadId);
    });

});

module.exports = router;
