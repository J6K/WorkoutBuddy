const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router/index');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const parser = require('body-parser');
const db = require('./db/config');

const server = express();

server.use(cors());
server.use(express.static('Client'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true }));

server.use('/api', router);

server.listen(PORT, (err) => {
  if (err) {
    console.log(`there was an error listening on ${PORT}`);
  } else {
    console.log(`successfully listening on port ${PORT}`);
  }
});
