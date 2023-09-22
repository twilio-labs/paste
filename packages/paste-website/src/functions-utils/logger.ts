import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [new transports.Console()],
});
