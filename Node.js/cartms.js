function init(msg,respond) {
    console.log("Plugin Initialized")
    id=1;
    respond();
}
module.exports=function cart(options) {
    this.add({component:'cart', action:'add'},(args,respond)=>{
        let cart=this.make('cart');
        cart.id=id++;
        cart.title=args.title;
        cart.save$((err,book)=>{
            if (err){
                respond(null, {message:"Not Added"});
            }else{
                respond(null,{message:"Added to cart"});
            }
        })
    });

    this.add({component:'cart', action:'view'},(args,respond)=>{
        let cart=this.make('cart');
        cart.list$({},(err,list)=>{
            respond(null,{books:list})
        })
    })

    this.add({component:'cart', action:'remove'},(args,respond)=>{
        let cart=this.make('cart');
        cart.remove$(args.id,(err)=>{
            respond(err,{message:"Removed from Cart"})
        })
    })
    this.add({init:"cart"}, init);
}

//run server in vscode terminal and cmnd prommpt mongod and go to postman and in body type
// {"component":"cart","action":"view"} => to view list of books
// to addbooks {"component":"cart","action":"add","title":"Java"}
// to remove books {"component":"cart", "action":"remove",id:"1"}
// Go to the command prompt and follow the mongo steps to run and find whether the changes are reflected