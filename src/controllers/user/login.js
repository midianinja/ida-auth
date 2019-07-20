import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import statusCode from '../../status';

dotenv.config();
let SECRET = process.env.SECRET;

/**
 * function that get all services on database 
 * @param  {object} params request params
 * @param  {object} body request data
 * @returns {object} containt status, success data or error
 */
export const login = async (params, body) => {
    const Users = mongoose.model('users');
    
    let user;
    try {
        user = await Users.findOne({ username: body.username });
    } catch (e) {
        return { status: statusCode.INTERNAL_SERVER_ERROR };
    }
    
    if (!user) return { status: statusCode.UNAUTHORIZED, error: 'user/not-found' }
    const match = await bcrypt.compare(body.password, user.password);
    if (!match) return { status: statusCode.UNAUTHORIZED, error: 'user/wrong-password' };
    
    let token = jwt.sign({ username: body.username, ida: user._id }, SECRET, {
        expiresIn: '1h',
    });

    return {
        status: statusCode.ACCEPTED,
        data: { ida: user._id, token },
    };
}

