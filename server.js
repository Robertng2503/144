const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// Sets up the Express-Handlebars
// =============================================================
const app = express();
// PORT
const PORT = process.env.PORT || 3000;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'the secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// Have engine use handlebars template
app.engine('handlebars', hbs.engine);
// Look for files that end with .handlebars
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Looks for styles
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// Listener
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});