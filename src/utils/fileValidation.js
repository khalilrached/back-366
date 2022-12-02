import config from '../../config/config.js';

const limits = {
  files: 15, // files per request
  fileSize: 1024 * 1024 * config.fileSize, //  (max file size)
};
export default limits;
