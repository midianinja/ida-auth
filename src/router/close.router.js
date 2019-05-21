import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

//routes of the application that do not require authentication

const closeRouter = () => {
    const Users = mongoose.model('users');

    var router = express.Router();

    return router;
};

export default closeRouter;
