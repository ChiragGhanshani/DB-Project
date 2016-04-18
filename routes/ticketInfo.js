var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('ticketInfo', { title: 'Ticket Info' });
});

module.exports = router;
