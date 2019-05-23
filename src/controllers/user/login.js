import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findByUsername } from '../utils';
import dotenv from 'dotenv';
import statusCode from '../../status';

dotenv.config();
let SECRET = process.env.SECRET;

//login func

// route -> /login

//method POST

// auth required: No

// receives body with username and password
// search for existing username
// compare password with hash stored
//generates token
// return logged userId and token

export const login = async (params, body) => {
    try {
        let userExists = await findByUsername(body.email);
        let match;
        if (!userExists) {
            return {
                status: statusCode.BAD_REQUEST,
                data: { message: 'user not found' } 
            };
        }
        if (userExists.password && body.senha) {
            match = await bcrypt.compare(body.senha, userExists.password);
        }
        if (match) {
            let token = jwt.sign({ username: body.email, ida: userExists._id }, SECRET, {
                expiresIn: '1h',
            });
            return {
                status: statusCode.ACCEPTED,
                data: { message: 'sucessfull login', ida: userExists._id, token }
            };
        } else return { status: statusCode.UNAUTHORIZED, data: { message: 'wrong password' } };
    } catch (e) {
        return { status: 500, data: e };
    }
};
