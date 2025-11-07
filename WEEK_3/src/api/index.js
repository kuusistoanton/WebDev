import express from 'express';
import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';

const app = express();
const router = express.Router();

app.use('/', express.static('public'));
router.use('/cats', catRouter);
router.use('/users', userRouter);

//router.use('/auth', authRouter);

export default router;