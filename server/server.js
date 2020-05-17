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

server.get('/:to', function (req, res) {
  const { to } = req.params;
  res.send(`To: ${to}`);
});

server.get('/:from/:to', function (req, res) {
  const { from, to } = req.params;
  res.send(`From: ${from} To: ${to}`);
});

server.get('/:from/:fromDate/:to/:toDate', function (req, res) {
  const { from, fromDate, to, toDate } = req.params;
  res.send(
    `From: ${from}\nFrom Date: ${fromDate}\nTo: ${to}\nTo Date${toDate}`
  );
});

function listening(port) {
  console.log(`Server is now running on port ${port}...`);
}

server.listen(PORT, listening(PORT));
