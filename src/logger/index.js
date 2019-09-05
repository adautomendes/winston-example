const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;

require('dotenv').config();

module.exports = prefix => {

    /**
     * Customizing output for log
     */
    const myFormat = printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`;
    });

    /**
     * Creating logger with module defined options
     */
    const logger = createLogger({
        format: combine(
            label({ label: prefix }), // Use the prefix defined in the module's import
            timestamp(), // Print time stamp
            myFormat, // Use our customized format
            colorize({
                all: true,
                colors: { info: 'green', error: 'red' }
            })
        ),
        transports: [new transports.Console(), new transports.File({ filename: process.env.LOG_FILE })] // Output log in console and in the file 'server.log'
    });

    var module = {
        print(msg) {
            logger.info(`${msg}`); // Outputs a message
        },

        /**
         * This method will be used as middleware for all requests.
         * See routes.js.
         */
        printRequest(req, res, next) {
            const { method, originalUrl, body } = req;

            let msg = `${method} ${originalUrl}`;

            if (Object.keys(body).length > 0) { // If it has body
                msg += ` ${JSON.stringify(body)}`; // Include body in log
            }

            logger.info(msg);

            next();
        }
    };

    return module;
}