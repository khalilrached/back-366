import fs from 'fs';

const deleteFolder = (folderPath) => {
  fs.rmdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(`error deleteing ${folderPath}`);
    }

    console.log(`${folderPath} is deleted!`);
  });
};
export default deleteFolder;
