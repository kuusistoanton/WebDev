import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

import {
    getCat,
    catById,
    postCat,
    putCat,
    deleteCat

} from '../controllers/cat-controller.js';

const catRouter = express.Router();


catRouter.route('/').get(getCat).post(upload.single('file'), postCat);

catRouter.route('/:id').get(catById).put(putCat).delete(deleteCat);

export default catRouter;

