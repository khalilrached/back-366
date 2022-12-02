import express from 'express';
import sportsRoutes from './sports.routes.js';

// eslint-disable-next-line new-cap
const router = express.Router();
router.use('/predict', sportsRoutes);
export default router;