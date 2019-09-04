const express = require('express');
const appRouter = express.Router();
const deviceRouter = express.Router();

const DeviceController = require('./src/controllers/DeviceController');
const DeviceLogger = require('./src/logger')('DEVICE-CONTROLLER'); // Defining logger for this device controller

appRouter.use('/device', DeviceLogger.printRequest, deviceRouter); // Setting printRequest as a middleware function for '/device' routes

deviceRouter.post('/', DeviceController.add);
deviceRouter.get('/:pos?', DeviceController.search);
deviceRouter.delete('/', DeviceController.clear);

module.exports = appRouter;