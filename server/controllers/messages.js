var models = require('../models');
//var app = require('');


//Table 'chat.Messages' doesn't exist


module.exports = {
  get: function (req, res) {
    //res.send('testing...');
    console.log('controller.get');
    var prom = models.messages.getAll();
    prom.then((messes) => { res.send(messes); });
    prom.catch((error) => { res.statusCode = 500; res.send(error); });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('controller post');
    // console.log(req);
    // console.log(models.messages.create);
    // testpost plz ignore var prom = models.messages.create({text: 'testpost', username: 'userpost', roomname: 'roompost'});
    console.log('req query:');
    console.log(req.query);
    var prom = models.users.findAll({
      where: {
        username: req.query.username
      }
    });
    prom.then((results) => { 
      if (results.length === 1) {
        var id = results[0].dataValues.userid;
        var prom2 = models.messages.create({text: req.query.text, userid: id, roomname: req.query.roomname});
        prom2.then(
          (resolve) => {res.send(req.query); },
          (error) => { res.statusCode = 500; res.send(error); }
        );
      } else {
        var prom2 = models.users.create({username: req.query.username});
        prom2.then((resolved) => { 
          var prom3 = models.messages.create({text: req.query.text, userid: resolved.dataValues.userid, roomname: req.query.roomname}); prom3.then(
            (resolve) => { res.send(req.query); },
            (error) => { res.statusCode = 500; res.send(error); }
          );
        });
      }
    }, (error) => { res.statusCode = 500; res.send(error); } );
    
    // var prom = models.messages.create({text: req.query.text, username: req.query.username, roomname: req.query.roomname});
    // prom.then(
    //   (resolve) => { res.send(req.query); },
    //   (error) => { res.statusCode = 500; res.send(error); }
    // );

    //prom.then(res.send());
    //prom.catch((error) => { console.log('controller.messages.get error :' + error); });
  } // a function which handles posting a message to the database
};
