import loginService from '../services/login.service';
import tokenService from '../../common/services/token.service';

module.exports.login = (req, res) => {
    loginService.login(req)
    .then(tokenService.createToken, badLogin)
    .then(success)
    .catch(error);

    function success(token) {
        res.cookie('forestryServices', token, { maxAge: 172800 }).status(200).json({ authorized: true });
    }

    function badLogin(err) {
        res.status(403).send(err);
    }

    function error() {
        res.status(401).send('There was an internal error.');
    }
};

module.exports.logout = (req, res) => {
    loginService.logout(req, res);
};
