import crypto from 'crypto';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync(__dirname + '/../config.json'));

module.exports.encrypt = (data) => {
    const cipher = crypto.createCipher('aes192', config.secret);
    let encrypted = cipher.update(data, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
};

module.exports.decrypt = (data) => {
    const decipher = crypto.createDecipher('aes192', config.secret);
    let dec = decipher.update(data, 'base64', 'utf-8');
    dec += decipher.final('utf-8');
    return dec;
};
