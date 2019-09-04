const express = require('express');
const server = express();
require('dotenv').config();

const Logger = require('./src/logger')('SERVER');

const routes = require('./routes');

server.use(express.json());

server.use(routes);

server.listen(process.env.PORT, () => {
    Logger.print('✅ App running');
})