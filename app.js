const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

const contentTypeHeader = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
}
app.use(contentTypeHeader);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(fileUpload({
  createParentPath : true,
}));

const applicationRouter = require('./src/routes/applicationController');
const testRouter = require('./src/routes/testController');
const integrationRouter = require('./src/routes/integrationController');

app.use('/applications', applicationRouter);
app.use('/tests', testRouter);
app.use('/integrations', integrationRouter);

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

module.exports = app;
