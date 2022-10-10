function init(msg,respond){
    console.log("Plugin Initialized...")
    respond();
}

module.exports=function cate(options) {
    this.add({ component:'search'}, (args,respond) => {
        let collections=this.make('catalog')
        if( args.type === "title" ){
            collections.list$({title:args.search},(err,list) => {
                if (err) throw err;
                respond(null,list)
            })
        } 
        else{
            collections.list$({category:args.search}, (err,list) => {
                if (err) throw err;
                respond(null,list)
            })
        }
    })

    this.add({ init:"cate"},init);
}