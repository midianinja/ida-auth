import express from 'express';
import { handle } from './auth.handler';
import { user } from '../controllers';

const authRouter = () => {
    var router = express.Router();
    router.post('/login', handle(user.login));
    router.post('/signup', handle(user.signup));

    return router;
};

export default authRouter;
