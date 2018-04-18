const express = require('express');
const router = express.Router();

router.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

router.get('/home', (req, res) => {
	res.send({ express: 'Home' });
});

module.exports = router;
