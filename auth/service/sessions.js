let clients = [];

module.exports.storeToken = (token) => {
  clients.push(token);
};

module.exports.removeToken = (token) => {
  const idx = clients.indexOf(token);
  clients.splice(idx,1);
};
