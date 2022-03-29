require('../../pkg/db/index');
const express = require('express');
const jwt = require('express-jwt');
const handlers = require('./hendlers/auth');
const cors = require('cors');

const api = express();
api.use(cors());


api.use(express.json());
api.use(jwt({
    secret: 'secretpassword',
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/auth/login',
        '/api/v1/auth/create-account'
    ]
}));

api.post('/api/v1/auth/login', handlers.login);
api.post('/api/v1/auth/create-account', handlers.createAccount);
// api.get('/auth/validate', handlers.validate);
// api.get('/auth/renew-jwt', handlers.renew);
// api.post('/auth/forot-password', handlers.forgotPassword);
// api.post('/auth/reset-password', handlers.resetPassword);

api.listen(10001, err => {
    if (err) {
        return console.log('Could not start server', err);
    }
    console.log('Server successfully started on port 10001');
})