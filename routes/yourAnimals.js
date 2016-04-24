var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('yourAnimals', { title: 'Your Animals' });
});

module.exports = router;
