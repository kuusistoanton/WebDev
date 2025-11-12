import express from 'express';
import multer from 'multer';
import { createThumbnail } from '../../middlewares/upload.js';
const upload = multer({ dest: 'uploads/' })

import {
    getCat,
    catById,
    postCat,
    putCat,
    deleteCat

} from '../controllers/cat-controller.js';

const catRouter = express.Router();


catRouter.route('/').get(getCat).post(upload.single('file'),  (req, res, next) => {
    createThumbnail(req, res, next);
    next();
}
, postCat);

catRouter.route('/:id').get(catById).put(putCat).delete(deleteCat);

export default catRouter;

