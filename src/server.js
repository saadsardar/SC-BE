const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('./config/db');
require('dotenv').config()
const routes = require('./routes');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', routes); 

connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
