const { createLogger, format, transports } = require('winston');
const winston = require('winston');
require('winston-mongodb');

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});
  
const logger = createLogger({
  format: combine(timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    // - Write to all logs with level `info` and below to `combined.log` 
    new transports.File({ filename: './logs/log.log', level: 'warn' }),
    new transports.File({ filename: './logs/info.log', level: 'info' }),
    new transports.Console(),
    new winston.transports.MongoDB({collection : 'log', level : 'warn', db : process.env.DATABASE_URL , options:{useUnifiedTopology: true}}),
  ],
});
module.exports = logger;