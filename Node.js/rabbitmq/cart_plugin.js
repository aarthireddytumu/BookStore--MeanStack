function cart(options) {
  this.add({ role: "cart", op: "add" }, (args, reply) => {
    const book = this.make("cart");
    //console.log(args._id);
    book.id = args.id;
    book.title = args.title;
    book.category = args.category;
    book.save$((err, book) => {
      if (err) return console.log(err);
      console.log(book);
      reply(null, { result: "Book added to cart" });
    });
  });
  this.add({ role: "cart", op: "view" }, (args, reply) => {
    const book = this.make("cart");
    book.list$({}, (err, books) => {
      if (err) return console.log(err);
      reply(null, { result: books });
    });
  });
  this.add({ role: "cart", op: "checkout" }, (args, reply) => {
    this.act({ role: "cart", op: "view" }, (error, response) => {
      if (error) console.log(error);
      console.log("Book list" + response.result);
      this.client({
        type: "amqp",
        pin: "role: order, op:checkout",
        url: "amqp://guest:guest@localhost:5672",
      }).act(
        { role: "order", op: "checkout", books: response.result },
        (err, res) => {
          if (err) throw err;
          console.log(res)
          reply(null, { result: "order id:"+res.orderid+"Thanks for placing an order!" });
        }
      );
    });
  });
}

module.exports = cart;
