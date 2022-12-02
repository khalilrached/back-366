import express from 'express';
import fs from 'fs';
import mime from 'mime';
import multer from 'multer';
import limits from '../../utils/fileValidation.js';
import sportServices from '../services/sports.services.js';
import imgFilter from '../../utils/imgFilter.js';
const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    fs.mkdirSync('src/v1/services', {
      recursive: true
    });
    cb(null, 'src/v1/services');
  },
  filename(_req, file, cb) {
    cb(null, `file.${mime.getExtension(file.mimetype === 'image/jpg' ? 'image/jpeg' : file.mimetype)}`); // Appending extension
  }
});

const uploadMany = multer({
  storage,
  limits,
  fileFilter: imgFilter
});

// eslint-disable-next-line new-cap
const sportsRoutes = express.Router();
sportsRoutes.post('/sport', uploadMany.fields([{
  name: 'picture',
  maxCount: 1
}]), sportServices.getSportPredictions);
sportsRoutes.post('/products', uploadMany.fields([{
  name: 'picture',
  maxCount: 1
}]), sportServices.getProductsPredictions);
export default sportsRoutes;