import server from './src/server';
import mongodb from './src/db';
import dotenv from 'dotenv';

dotenv.config();

mongodb()
    .then(async () => {
        const app = server();

        app.listen(process.env.PORT, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Server Running - Listening to port ${process.env.PORT}`);
            }
        });
    })
    .catch((e) => {
        console.log('MONGODB: ', 'Failed to connect.');
        console.log(e);
    });
