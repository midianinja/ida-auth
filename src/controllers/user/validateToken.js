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
export const validateToken = (params, body) => new Promise((res, rej) => {
  jwt.verify(body.token, SECRET, (err, decoded) => {
    console.log('decoded: ', decoded);
    if (err) {
      rej({
        status: statusCode.UNAUTHORIZED,
        data: err,
      });
    }
    else res({
      status: statusCode.ACCEPTED,
      data: decoded,
  })
  });
});

