var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('birds', { title: 'Birds' });
});

module.exports = router;
