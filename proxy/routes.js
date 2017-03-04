module.exports = (app,config,apiProxy) => {

  app.get('/', (req,res) => {
    const clientServer = 'http://' + config.client.server + ':' + config.client.port;
    apiProxy.web(req,res,{target: clientServer});
  });

  app.all('/auth/*', (req,res) => {
    const authServer = 'http://' + config.api.auth.server + ':' + config.api.auth.port;
    apiProxy.web(req,res,{target: authServer});
  });

  app.all('/users/*', (req,res) => {
    const userServer = 'http://' + config.api.user.server + ':' + config.api.user.port;
    apiProxy.web(req,res,{target: userServer});
  });

  app.all('/upload/*', (req,res) => {
    const uploadServer = 'http://' + config.api.upload.server + ':' + config.api.upload.port;
    apiProxy.web(req,res,{target: uploadServer});
  });

};
