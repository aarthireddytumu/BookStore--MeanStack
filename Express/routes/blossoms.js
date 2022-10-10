var express=require('express');
var router=express.Router();
var axios=require('axios')

router.get('/', function ( req , res , next ) {
    axios.get("http://localhost:9090/products", {
    params : {
        component: "products",
        by: "name"
    },

}) .then(response => {console.log(response),res.send(response.data)})
    .catch(err => res.send(err))
})
module.exports = router;