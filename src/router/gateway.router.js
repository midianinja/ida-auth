import express from 'express';
import { gateway_handler } from './gateway.handler';
import { gateway } from '../controllers';

//routes of the application that do not require authentication

const publicRouter = () => {
    var router = express.Router();
    router.use('/:root/*', gateway_handler(gateway));
    return router;
};

export default publicRouter;
