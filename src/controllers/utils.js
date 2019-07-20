import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        });
    });

    return hashedPassword;
};
