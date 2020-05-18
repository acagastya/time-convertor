const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

const envPath = path.join(__dirname, '.env');
dotenv.config({
  path: envPath,
});

const server = express();
const PORT = process.env.PORT || 8080;

server.get('/', function (req, res) {
  res.send('Hello from server');
});

server.get('/help', function (req, res) {
  res.send('This is a help page.');
});

server.get('/from-to', function (req, res) {
  res.send('This is a from-to page.');
});

server.get('/future', function (req, res) {
  const { from, to } = req.params;
  res.send(`From: ${from} To: ${to}`);
});

function listening(port) {
  console.log(`Server is now running on port ${port}...`);
}

server.listen(PORT, listening(PORT));
