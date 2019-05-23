import mongoose from 'mongoose';
import usersModel from './models/users.model';
import servicesModel from './models/services.model';

const mongodb = async () => {
    mongoose.model('services', servicesModel);
    mongoose.model('users', usersModel);
    mongoose.set('useFindAndModify', false);
    await mongoose.connect('mongodb://localhost/auth-ida', { useNewUrlParser: true });
};

export default mongodb;
