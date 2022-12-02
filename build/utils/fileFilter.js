import { ErrorHandler } from './errorsHandler.js';
import httpStatusCodes from './httpStatusCodes.js';
const fileFilter = (req, file, next) => {
  try {
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return next(new ErrorHandler(httpStatusCodes.BAD_REQUEST, 'Only pdf, doc, docx, xls, xlsx, jpeg/jpg and png are allowed!'));
    }
    return next(null, true);
  } catch (error) {
    console.log('🚀 ~ file: fileFilter.js ~ line 19 ~ fileFilter ~ error', error);
  }
};
export default fileFilter;