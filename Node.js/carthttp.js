let seneca=require('seneca')()
let entities= require('seneca-entity')

seneca.quiet();
seneca.use(entities);

seneca.use('mongo-store',{
    name:'cloudnativedb',
    host:'127.0.0.1',
    port: 27017
})
seneca.use(require('./cartms'))
seneca.ready( (err)=>{
    if (err) throw err;
    console.log("Server is ready!!!")
    seneca.listen({type:'web', port:'9091',path:'/cart'})
})
