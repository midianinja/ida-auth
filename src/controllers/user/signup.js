import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

import { findByUsername, hashPassword } from '../utils';

let SECRET = 'secret';

//signup func

// route -> /signup

//method: POST

// auth required: No

// receives body with username and password
// search for existing user with same username
// encrypt password and and create user on database
//return userId

export const signup = async (body) => {
    const Users = mongoose.model('users');

    try {
        let userExists = await findByUsername(body.username);

        if (userExists) return { status: 200, data: { message: 'username already exists' } };

        let hashedPassword = await hashPassword(body.senha);

        const newUser = new Users({
            username: body.email,
            password: hashedPassword,
        });

        let data = await newUser.save();

        let token = jwt.sign({ username: body.username, userId: newUser._id }, SECRET, { expiresIn: '1h' });

        return { status: 200, data: { userId: newUser._id, message: 'sucessfull signup', token } };
    } catch (e) {
        return { status: 500, data: e };
    }
};
