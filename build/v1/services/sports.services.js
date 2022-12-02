/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import dotenv from 'dotenv';
import { ErrorHandler } from '../../utils/errorsHandler.js';
import httpStatusCodes from '../../utils/httpStatusCodes.js';
import responseHandler from '../../utils/responseHandler.js';
import FormData from 'form-data';
import fs from 'fs';
import grantAccess from './grantAccess.js';
import path from 'path';
import url from 'url';
import getProducts from './getProducts.js';
import getSport from './getSport.js';
dotenv.config({
  path: '.env'
});
const access = grantAccess();
const sports = {
  async getProductsPredictions(req, res, next) {
    try {
      const data = new FormData();
      const __filename = url.fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      data.append('file', fs.createReadStream(path.resolve(__dirname, 'file.jpeg')));
      const products = await getProducts(access.access_token, data);
      return res.status(httpStatusCodes.OK).json(responseHandler({
        message: 'Success',
        data: {
          products
        }
      }));
    } catch (error) {
      console.log('error', error);
      return next(new ErrorHandler(httpStatusCodes.BAD_REQUEST, error));
    }
  },
  async getSportPredictions(req, res, next) {
    try {
      const data = new FormData();
      const __filename = url.fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      data.append('file', fs.createReadStream(path.resolve(__dirname, 'file.jpeg')));
      const sport = await getSport(access.access_token, data);
      return res.status(httpStatusCodes.OK).json(responseHandler({
        message: 'Success',
        data: {
          sport
        }
      }));
    } catch (error) {
      console.log('error', error);
      return next(new ErrorHandler(httpStatusCodes.BAD_REQUEST, error));
    }
  }
};
export default sports;