function init(args,respond) {
    console.log('Plugin is Initialized...')
    respond();
}

module.exports=function products(options){
    this.add({component:'products',by:'name'},(args,respond) => {
        let products = this.make('products')
        products.list$({},(err,list) => {
            if (err) throw err
            respond(null,list)
        })
    })
    this.add({init:"products"},init)
}