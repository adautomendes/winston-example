# An example of Winston (Logger for Node.js) usage
This is an example just to demonstrate how Winston can be use as logging library for web applications and REST APIs.

## Dependencies
- [NodeJS/NPM](https://nodejs.org/): JavaScript runtime.
- [Yarn](https://yarnpkg.com/): Dependency management.
- [Express](https://expressjs.com/): Node.js web framework.
- [Winston](https://github.com/winstonjs/winston): Logging library.
- [Dotenv](https://github.com/motdotla/dotenv): Environment variables loading.
- [Nodemon](https://nodemon.io/): Monitor for any changes in your source and automatically restart your server.

## API Endpoints
Find below all endpoints exposed by this server. Payload examples are available in Postman collection within this repo: `Winston-Example.postman_collection.json`.

`POST http://<api_host>:<api_port>/device`: create a new device instance in devices list.  
`GET http://<api_host>:<api_port>/device/<id>`: find a device by ID, if ID is not provided, find all devices.  
`DELETE http://<api_host>:<api_port>/device`: clear device list.  
  
## Configuration
This project has a `.env` file which contains environment variables used to start this server.

`PORT`: port used to run Server.  

## Dependencies and Execution
Before run each server run the following command (once in each folder) to install the proper dependencies:

`yarn install`

To run each server open a command window in each folder and run the command below:

`yarn dev`