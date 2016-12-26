const crypto = require('crypto');
const fs = require('fs');
const configData = fs.readFileSync(__dirname + '/../../config.json');
const config = JSON.parse(configData);
const secret = config.api.auth.secret;

module.exports.encrypt = (data) => {
  const cipher = crypto.createCipher('aes192', secret);
  let encrypted = cipher.update(data, 'utf-8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

module.exports.decrypt = (data) => {
  const decipher = crypto.createDecipher('aes192', secret);
  let dec = decipher.update(data, 'base64', 'utf-8');
  dec += decipher.final('utf-8');
  return dec;
};
