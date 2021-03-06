import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (!err) {
                req.token = decoded;
                return next();
            }
            return res.status(200).send({
                success: false,
                message: 'Token is not valid',
            });
        });
    } else {
        return res.status(200).send({
            success: false,
            message: 'Auth token is not supplied',
        });
    }
};

export default checkToken;
