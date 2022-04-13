var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require("./routes/books");
var authRouter = require("./routes/auth")
var birthdayController = require("./controllers/borthday.controller")
var app = express();
app.use(passport.initialize());



const connect = require("./connections/mongoose")
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book', booksRouter);
app.use('/auth', authRouter)
app.use('/birthday',birthdayController)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//Connecting to server
connect()
// app.listen(2345,async()=>{  // do not add localhost here if you are deploying it
//   await connect();
//   console.log("server listening to "+ 2345);
// });
 module.exports = app;
