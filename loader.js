const app = require('./server');
const router = require('./routes/main.route');
const cookieParser = require('cookie-parser');
//const session = require('express-session');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const models = require("./models/");
//const fileUpload = require('express-fileupload');


app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(cookieParser());
/*app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));
app.set('trust proxy', 1);
app.use(session({
  secret: 'webbookfca',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 60000,
    httpOnly: true,
  }
}));
//app.use(expressValidator());
app.use(function (req, res, next) {
  // check if session exists
  if (global.sessData === undefined) {
    global.sessData = req.session;
    global.sessData.ID = req.sessionID;
  }
  else { // yes, cookie was already present
    console.log('session exists', global.sessData.ID);
  }
  next();
});
*/
models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine');

}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
});

require('./routes/auth.route.js')(app);
require('./routes/sitio.route.js')(app);
require('./routes/imagens.route.js')(app);
require('./routes/modelos.route.js')(app);
require('./routes/ue.route.js')(app);
require('./routes/materiais.route.js')(app);

app.use('/', router);


module.exports = app;