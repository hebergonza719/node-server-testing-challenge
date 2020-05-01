const express = require('express');

const avengersRouter = require('../avengers/avengers-router.js')

const server = express();

server.use(express.json());

server.use('/api/avengers', avengersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;