var express = require('express');
var router = express.Router();
var axios= require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//cart-add
router.post('/add',function(req,res,next){
  axios.get("http://localhost:9091/cart",{
    params:{
      component: "cart",
      action: "add",
      title : req.params.booktitle
    },
  }).then(response=>res.send(response.data))
  .catch(err => res.send(err))
});

//cart-remove
router.delete('/remove/:id',function(req,res,next){
  axios.get("http://localhost:9091/cart",{
    params:{
      component: "cart",
      action : "remove",
      id: req.params.id
    }
  })
})

module.exports = router;
