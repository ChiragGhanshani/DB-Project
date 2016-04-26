var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('events', { title: 'Events' });
});

module.exports = router;