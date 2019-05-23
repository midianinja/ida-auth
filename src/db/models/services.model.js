import { Schema } from 'mongoose';

const serviceModel = new Schema({
    path: { type: String, unique: true, required: true },
    root_url: { type: String, required: true },
    name: { type: String, required: false },
    is_public: { type: Boolean, default: false },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default serviceModel;