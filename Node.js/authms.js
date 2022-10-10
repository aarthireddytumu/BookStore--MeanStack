function init(args,respond){
    console.log('Plugin is initialized...')
    respond();
}

module.exports=function authapp(options){
    this.add({component:'auth',by:'person'},(args,respond) => {
        let collection=this.make('auth')
        collection.list$({},(err,list) => {
            if (err) throw err;
            respond(null,list)
        })
    })
    this.add({component:'auth',by:'person',action:'add'},(args,respond)=>{
        let collection=this.make('auth')
        collection.firstname=args.firstname
        collection.lastname=args.lastname
        collection.gender=args.gender
        collection.username=args.username
        collection.password=args.password
        collection.save$((err,Task)=>{
            if (err){
                respond(null, {message:"User Creation Failed"});
            }else{
                respond(null,{message:"User Created Successfully"});
            }
        })
    })
        
    this.add({init:"todoapp"},init)
}