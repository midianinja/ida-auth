import express from 'express';
import { gateway_handler } from './gateway.handler';

//routes of the application that do not require authentication
const publicRouter = () => {
    var router = express.Router();
    router.use('/:root/*', gateway_handler);
    return router;
};

//routes of the application that require authentication
const privateRouter = () => {
    var router = express.Router();
    return router;
};

export default ({ publicRouter, privateRouter });
