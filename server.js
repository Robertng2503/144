const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ });

// Have engine use handlebars template
app.engine('handlebars', hbs.engine);
// Look for files that end with .handlebars
app.set('view engine', 'handlebars');


// Listener
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });