var express = require('express')
var router = express.Router()

var member = require('./member.js')


router.get('/api/member', function (req, res, next) {
    member.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  });

  router.post('/api/member', function (req, res, next) {
    var obj = new member(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(obj);
      }
    })
  });


    router.post('/login',function(req,res){
      console.log(req.body.username + " " +req.body.  password);  
       member.find({ username : req.body.username , password : req.body.password }).exec(function (err, results) {
       if (err) {
         res.status(500).send(err);
       } else {
       
        res.send(results)
        console.log(results)
       }
     }); 
  });




module.exports = router
