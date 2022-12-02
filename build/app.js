/* eslint-disable no-underscore-dangle */
/**
 * Module dependencies.
 */
import 'module-alias/register.js';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import flash from 'connect-flash';
import cors from 'cors';
import bodyParser from 'body-parser';
import boom from 'express-boom';
import appRoutes from './v1/routes/index.js';
import config from '../config/config.js';

/**
 * Express configuration.
 */
const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(compression());
app.use(bodyParser.json());
app.use(boom());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(flash());

/**
 * Security
 */
app.use(helmet());
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

/**
 * Set uploaded files location
 */
app.use('/uploads', express.static('uploads', {
  maxAge: 31557600000
}));

/**
 * App routes.
 */
app.use('/api/v1', appRoutes);
app.get('/', (_req, res) => {
  res.status(200).json({
    msg: 'node-express-starter API',
    port: config.port || 3000
  });
});
export default app;