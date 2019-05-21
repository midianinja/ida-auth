import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

//routes of the application that do not require authentication

const openRouter = () => {
    const Users = mongoose.model('users');

    var router = express.Router();

    router.get('/hello', (req, res) => res.status(200).send('hello world'));

    return router;
};

export default openRouter;
