const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const userRouter = require('./data/routers/user-router.js')
const postRouter = require('./data/routers/post-router.js')

const server = express();
const parser = express.json();
const logMiddleware = logger('dev');
const securityMiddleware = helmet();

server.use(parser, logMiddleware, securityMiddleware);
server.use('/api/users', userrouter, postrouter);

server.get('/', async (req, res) => {
  res.send(`
    <h2>TESTING...</h2>`);
});

module.exports = server; 