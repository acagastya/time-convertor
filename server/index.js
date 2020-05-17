const express = require('express');
const server = expres();
const PORT = process.env.port || 8080;

server.get('/', function (req, res) {
  res.send('Hello from server');
});

server.get('/:from/:to', function (req, res) {
  const { from, to } = req.params;
  res.send(`From: ${from} To: ${to}`);
});

function listen(port) {
  console.log(`Server is now running on port ${port}...`);
}

server.listen(PORT, listening(PORT));
