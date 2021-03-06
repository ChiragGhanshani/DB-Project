var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var timeout = require('connect-timeout');

var routes = require('./routes/index');
var users = require('./routes/users');
var aboutPage = require('./routes/aboutPage');
//Member routes
var login = require('./routes/login');
var memberInfo = require('./routes/memberInfo');
var memberFAQ = require('./routes/memberFAQ');
var signup = require('./routes/signup');
//Visit us routes
var visitPage = require('./routes/visitPage');
var ticketInfo = require('./routes/ticketInfo');
var visitFAQ = require('./routes/visitFAQ');
//Animals routes
var animalsPage = require('./routes/animalsPage');
var mammals = require('./routes/mammals');
var birds = require('./routes/birds');
var aquatic = require('./routes/aquatic');
var amphibians = require('./routes/amphibians');
var reptiles = require('./routes/reptiles');
//Customer routes
var shop = require('./routes/shop');
var cart = require('./routes/cart');
var editInfo = require('./routes/editInfo');
//Keeper/Vet routes
var yourAnimals = require('./routes/yourAnimals');
var feedingGraphs = require('./routes/feedingGraphs');
//Manager routes
var manageEmployees = require('./routes/manageEmployees');
var salesOverview = require('./routes/salesOverview');
//Events routes
var events = require('./routes/events')

var app = express();

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(timeout(5000));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('public/'));


app.use('/', routes);
app.use('/users', users);
app.use('/about', aboutPage);
//members
app.use('/login',login);
app.use('/memberInfo', memberInfo);
app.use('/memberFAQ', memberFAQ);
app.use('/signup', signup);
//visit us
app.use('/visit', visitPage);
app.use('/ticketInfo', ticketInfo);
app.use('/visitFAQ', visitFAQ);
//animals
app.use('/animals', animalsPage);
app.use('/mammals', mammals);
app.use('/birds', birds);
app.use('/aquatic', aquatic);
app.use('/amphibians', amphibians);
app.use('/reptiles', reptiles);
//Customer pages
app.use('/shop', shop);
app.use('/shoppingCart', cart);
app.use('/editInfo', editInfo);
//Keeper/Vet pages
app.use('/yourAnimals', yourAnimals);
app.use('/feedingGraphs', feedingGraphs);
//Manager pages
app.use('/manageEmployees', manageEmployees);
app.use('/salesOverview', salesOverview);
//Events pages
app.use('/events', events);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
