var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('visit', { title: 'Visit Us' });
});

module.exports = router;
