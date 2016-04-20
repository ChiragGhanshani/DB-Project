var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('mammals', { title: 'Mammals' });
});

module.exports = router;
