var controller = require('./controllers');

module.exports = function(app, express) {
  app.get('/analyze', controller.getAnalysis);
  // app.post('/analyze', controller);
  // app.put('/analyze', controller);
  // app.delete('/analyze', controller);

  // Handle errors or errant requests
  app.use(function(req, res) {
    console.log('Unhandled server request');
    console.log(req.body);
    res.status(404).end();
  });
};