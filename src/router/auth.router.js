import express from 'express';
import { handle } from './auth.handler';
import { user } from '../controllers';

const authRouter = () => {
    console.log('')
    console.log('POST - /auth/login - to login')
    console.log('POST - /auth/signup - to signup')
    console.log('')
    var router = express.Router();
    router.post('/login', handle(user.login));
    router.post('/signup', handle(user.signup));

    return router;
};

export default authRouter;
