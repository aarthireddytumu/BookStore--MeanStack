var express=require('express');
var router=express.Router();
var axios=require('axios')

router.get('/:st/:r', function (req, res, next){
    axios.get("http://localhost:9093/service",{
        params: {
            component: "search",
            search: req.params.st,
            type: req.params.r
        }
    }).then(response => {console.log(response); res.send(response.data)})
    .catch( err => res.send(err))
});

module.exports = router;