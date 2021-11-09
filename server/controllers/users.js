var models = require('../models');

module.exports = {
  get: function (req, res) { res.end(); },
  post: function (req, res) {
    console.log('controller users post');

    var prom = models.users.create({username: req.query.username });
    prom.then(
      (resolve) => { res.send(req.query); },
      (error) => { res.statusCode = 500; res.send(error); }
    );
  }
};


