import dotenv from 'dotenv';
import config from './config/config.js';
import app from './src/app.js';
import httpLogger from './src/config/httpLogger.js';
import logger from './src/config/logger.js';
import { handleError } from './src/utils/errorsHandler.js';

/**
 * Load environment variables from .env file,
 */
dotenv.config({ path: '.env' });

/**
 * Set app port
 */
app.set('port', config.port);

/**
 * enable detailed API logging in dev env
 */
app.use(httpLogger);

/**
 * Error Handler.
 */
app.use((err, req, res, next) => {
  handleError({
    err,
    req,
    res,
    next,
  });
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  logger.info(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
  logger.info('  Press CTRL-C to stop\n');
});
