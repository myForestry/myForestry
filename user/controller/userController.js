const data = require('../service/data');
const authBridge = require('../service/authBridge');
const enc = require('../service/encrypt');

module.exports = {

    init: (configuration) => {
      authBridge.config(configuration);
    },

    checkToken: (token) => {
      return authBridge.authenticate(token);
    },

    allBusinesses: () => {
      return data.getAll();
    },

    findBusiness: (id) => {
      return data.find(id);
    },

    // saveBusiness: (business) => {
    //   authBridge.encrypt(business.password).then(function(data) {
    //     business.password = data;
    //     return data.save(business);
    //   }).catch(function() {
    //     console.log('Encryption promise rejected.');
    //   });
    // }

    saveBusiness: (business) => {
      const encrypted = enc.encrypt(business.password);
      business.password = encrypted;
      return data.save(business);
    },

    updateBusiness: (business) => {
      return data.update(business);
    }

  };
