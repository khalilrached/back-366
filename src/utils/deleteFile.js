import fs from 'fs';

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log('File not deleted!', err);
    } else {
      console.log('File deleted!');
    }
  });
};
export default deleteFile;
