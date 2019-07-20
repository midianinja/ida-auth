import express from 'express';
import { handle } from './auth.handler';
import { user } from '../controllers';

const authRouter = () => {
    console.log('');
    console.log('POST - /auth/login - to login');
    console.log('POST - /auth/signup - to signup');
    console.log('POST - /auth/validate-token - to validate token');
    console.log('');
    var router = express.Router();
    router.post('/login', handle(user.login));
    router.post('/signup', handle(user.signup));
    router.post('/validate-token', handle(user.validateToken));

    return router;
};

export default authRouter;
