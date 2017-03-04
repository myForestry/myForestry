import loginController from './controllers/login.controller';

module.exports = (app) => {
    app.post('/api/login', loginController.login);
    app.post('/api/logout', loginController.logout);
};