import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import { hashPassword } from '../utils';
import statusCode from '../../status';
dotenv.config();

let SECRET = process.env.SECRET;

/**
 * function that save a user on database 
 * @param  {object} params request params
 * @param  {object} body request data
 * @returns {object} containt status, success data or error
 */
export const signup = async (params, body) => {
    const Users = mongoose.model('users');
    let user;
    try {
        user = await Users.findOne({ username: body.username });
    } catch (e) {
      return { status: statusCode.INTERNAL_SERVER_ERROR, error: e };
    }

    if (user) return { status: statusCode.UNAUTHORIZED, error: 'auth/duplicated-user' };
    let hashedPassword = await hashPassword(body.password);
    const newUser = new Users({
        username: body.username,
        password: hashedPassword,
    });

    await newUser.save();
    let token = jwt.sign({ username: body.username, ida: newUser._id }, SECRET, { expiresIn: '1h' });

    return {
        status: statusCode.CREATED,
        data: { ida: newUser._id, token }
    };
};
