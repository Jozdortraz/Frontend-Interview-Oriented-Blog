const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 9000;

const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, error => {
  if (error) {
    console.error('Server Error: ', error);
  } else {
    console.log(`server is running at http://localhost:${PORT}`);
  }
});