import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

//routes of the application that do not require authentication

const authRouter = () => {
    const Users = mongoose.model('users');

    var router = express.Router();
    router.post('/login', handle(Users.login));

    router.post('/signup', handle(Users.signup));

    router.get('/most-liked', handle(Users.getAll));

    router.get('/user/:id', handle(Users.getOne));

    return router;
};

export default authRouter;
