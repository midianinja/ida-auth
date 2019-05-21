import { Schema } from 'mongoose';
import * as controllers from '../../controllers/';

const usersModel = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

usersModel.statics = controllers;

export default usersModel;
