var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('manageEmployees', { title: 'Manage Employees' });
});

module.exports = router;