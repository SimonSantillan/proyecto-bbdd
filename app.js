var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const methodOverride = require("method-override");

const sequelize = require("./database/conexion.js")

let insertRouter = require('./routes/insertRoutes');

/* const Certificador = require('./models/Certificador.js') */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* conexión con mi base de datos */
async function conexionOk() {
  try {
    /* Espero la auntenticación de sequelize */
    await sequelize.authenticate();
    console.log("DB conexión OK");
  } catch (error) {
    console.log(error);
  }
}
conexionOk();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);


app.use('/', insertRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(500).json({
    status: 500,
    error: err.message,
  });
});

module.exports = app;
