var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('salesOverview', { title: 'Sales Overview' });
});

module.exports = router;