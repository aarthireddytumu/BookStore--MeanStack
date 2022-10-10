var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET home page. */
router.get("/title/:booktitle",  function (req, res, next) {
   axios.get("http://localhost:9090/catalog", {
      params: {
        component: "catalog",
        by: "title",
        title: req.params.booktitle,
      },
    }).then(response=>res.send(response.data))
    .catch(err=>res.send(err))
})  
router.get("/category/:bookcategory",  function (req, res, next) {
    axios.get("http://localhost:9090/catalog", {
       params: {
         component: "catalog",
         by: "category",
         category: req.params.bookcategory,
       },
     }).then(response=>res.send(response.data))
     .catch(err=>res.send(err))
 }) 
 router.get("/category/:bookcategory/review/good",  function (req, res, next) {
    axios.get("http://localhost:9090/catalog", {
       params: {
         component: "catalog",
         by: "category",
         category: req.params.bookcategory,
         review:'good'
       },
     }).then(response=>res.send(response.data))
     .catch(err=>res.send(err))
 }) 
module.exports = router;