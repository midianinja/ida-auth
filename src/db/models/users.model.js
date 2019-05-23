import { Schema } from 'mongoose';

const usersModel = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    confirmed: { type: Boolean, default: false },
    last_login: { type: Date, default: Date.now() },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default usersModel;
