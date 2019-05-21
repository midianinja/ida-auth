import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import { hashPassword } from '../utils';

//update func

// route -> /me/update-password

// method: PUT

// auth required: yes

// receives token with userId and body with password
// search for existing userId
// hash new password update user on db
// return userId

export const update = async (params, body, token) => {
    const Users = mongoose.model('users');

    try {
        let hashedPassword = await hashPassword(body.password);
        let data = await Users.findOneAndUpdate(
            { _id: token.userId },
            { $set: { password: hashedPassword } },
            { new: true },
        );
        if (!data) return { status: 200, data: { message: 'userNot found' } };
        return { status: 200, data: { message: 'update password succesful', userId: data._id } };
    } catch (e) {
        return { status: 500, data: e };
    }
};
