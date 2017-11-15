var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
var app = express();
var redis = require('redis');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var router = express.Router();
var logger = require('morgan');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
var favicon = require('serve-favicon');
//设置模板的存放目录
app.set('views', path.join(__dirname, 'views'));

//设置页面中的模板引擎 ，设置为 ejs模板引擎
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

app.use(logger('dev'));


mongoose.connect('mongodb://Gary:first123@127.0.0.1/login?authSource=admin', {
  useMongoClient: true
});

var Schema = mongoose.Schema;
var UserSChema = new Schema({
  name: {
    type: String
  },
  passwd: {
    type: String
  }
});
var UserModel = mongoose.model("User", UserSChema);

var RedisClient = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  password: '123'
});

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/', index);
app.use('/users', users);

app.use(session({
  secret: 'weijinsuo',
  name: 'weijinsuo', //设置会话Id cookie,默认"connect.sid"
  resave: true,
  saveUninitialized: true
  // cookie: {
  //   maxAge: 60000
  // }
}));

var options = {
  root: __dirname + "public"
};

app.use('/',index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;



http.createServer(app).listen(8000, () => {
  console.log("监听 8000 。。。");
});
