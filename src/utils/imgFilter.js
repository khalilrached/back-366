import { ErrorHandler } from './errorsHandler.js';
import httpStatusCodes from './httpStatusCodes.js';

const imgFilter = (req, file, callback) => {
  try {
    const allowedMimeTypes = ['image/jpeg'];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      return callback(new ErrorHandler(httpStatusCodes.BAD_REQUEST, 'Only jpeg are allowed!'));
    }
    return callback(null, true);
  } catch (error) {
    console.log('🚀 ~ file: imgFilter.js ~ line 16 ~ imgFilter ~ error', error);
  }
};
export default imgFilter;
