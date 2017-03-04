import jwt from 'jsonwebtoken';
import fs from 'fs';

const configData = fs.readFileSync(__dirname + '/../config.json');
const config = JSON.parse(configData);

module.exports.createToken = (body) => {
    const objectToSign = {
        userName: body.userName,
        timeStamp: new Date()
    };
    const token = jwt.sign(objectToSign, config.secret);
    return Promise.resolve(token);
};

module.exports.unsignToken = (token) => {
    jwt.verify(token, config.secret, (err, data) => {
        if (err) return Promise.reject(err);
        else return Promise.resolve(data);
    });
};

