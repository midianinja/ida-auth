import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const findByUsername = async (username) => {
    const Users = mongoose.model('users');

    try {
        let data = await Users.findOne({ username: username });

        if (!data) return false;
        else return data;
    } catch (e) {
        return { status: 500, data: e };
    }
};

export const hashPassword = async (password) => {
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if (err) reject(err);
            resolve(hash);
        });
    });

    return hashedPassword;
};
