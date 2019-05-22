import { Schema } from 'mongoose';

const usersModel = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default usersModel;
