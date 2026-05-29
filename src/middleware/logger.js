import winston from 'winston';
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function logMiddleware(req, res, next) {
  logger.info({
    method: req.method, url: req.url
  });
  next();
};

export default logMiddleware;