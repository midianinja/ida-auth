import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import authRouter from "./router/auth.router";
import openRouter from './router/open.router';
import closeRouter from './router/close.router';
import authRouter from './router/auth.router';
import checkToken from './auth/middleware';

export default () => {
    let app = express();

    app.use(bodyParser.json());
    app.use(cors());

    app.get('/isAlive', (req, res) => res.status(200).send('ninja'));

    app.use('/auth', authRouter());

    app.use('/open', openRouter());

    app.use('/close', checkToken, closeRouter());

    return app;
};
