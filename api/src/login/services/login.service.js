import cryptoservice from '../../common/services/crypto.service';
import User from '../models/user.stub';

module.exports.login = (req) => {
    const data = req.body;
    console.log(data);
    if (data.userName && data.password) {
        data.password = cryptoservice.encrypt(data.password.toString());
        return User.findOne({userName: data.userName, password: data.password});
    } else return Promise.reject('Missing credentials');
};

module.exports.logout = (req, res) => {
    res.clearCookie('forestryServices').redirect('/');
};