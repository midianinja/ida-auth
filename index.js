import server from './src/server';
import path from 'path';
import express from 'express';
import mongodb from './src/db';
mongodb()
    .then(async () => {
        const app = server();

        app.listen(8080, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Server Running - Listening to port ${8080}`);
            }
        });
    })
    .catch((e) => {
        console.log('MONGODB: ', 'Failed to connect.');
        console.log(e);
    });

console.log(server);
