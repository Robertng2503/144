const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;
