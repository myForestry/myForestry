const request = require('request');
let authServer;

module.exports.config = (config) => {
  authServer = 'http://' + config.api.auth.server + ':' + config.api.auth.port;
};

module.exports.authenticate = (token) => {
  return new Promise(function(resolve,reject) {
    // -1 error, 0 unauthorized, 1 user, 2 admin
    let authLevel = -1;
    const server = authServer + '/:' + token;
    request(server, function(err,rs,body) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const jsonBody = JSON.parse(body);
        if (jsonBody.authenticated) {
            if (jsonBody.admin) {
              authLevel = 2;
            } else {
              authLevel = 1;
            }
        } else {
            authLevel = 0;
        }
        resolve(authLevel);
      }
    });
  });
};

// module.exports.encrypt = (unencrypted) => {
//   return new Promise(function(resolve, reject) {
//     const server = authServer + '/encrypt';
//     request.post({url: server, form: {data: unencrypted}}, function(err,res,body) {
//       if (err) reject(err);
//       const jsonBody = JSON.parse(body);
//       resolve(jsonBody.encrypted);
//     });
//   });
// };

// module.exports.encrypt = (unencrypted) => {
//   const server = authServer + '/encrypt';
//   request.post({url: server, form: {data: unencrypted}}, function(err, httpResponse, body) {
//     const jsonBody = JSON.parse(body);
//     return Promise.resolve(jsonBody.encrypted);
//   });
// };
