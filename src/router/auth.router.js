import express from 'express';
import mongoose from 'mongoose';
import { handle } from './auth.handler';

//routes of the application that do not require authentication

const authRouter = () => {
    const Users = mongoose.model('users');

    var router = express.Router();

    router.post('/login', handle(Users.login));

    router.post('/signup', handle(Users.signup));

    return router;
};

export default authRouter;
