var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('amphibians', { title: 'Amphibians' });
});

module.exports = router;
