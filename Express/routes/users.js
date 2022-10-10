var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admin',function(req,res,next){
  res.send("welcome "+req.query.user);    //type in postman http://localhost:3000/users/admin?user=aarthi displays welcome aarthi
})

//  /users/regular /users/gold /users/platinum
router.get('/:member',function(req,res,next){
  res.send("welcome "+req.params.member+" Member");    
})
 
module.exports = router;
