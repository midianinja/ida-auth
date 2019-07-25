import mongoose from 'mongoose';
import usersModel from './models/users.model';
import servicesModel from './models/services.model';

const uri = process.env.MONGO_URL || 'mongodb://localhost/auth-ida';
const mongodb = async () => {
    mongoose.model('services', servicesModel);
    mongoose.model('users', usersModel);
    mongoose.set('useFindAndModify', false);
    await mongoose.connect(uri, { useNewUrlParser: true });
};

export default mongodb;
