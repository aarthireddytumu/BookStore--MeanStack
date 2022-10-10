module.exports = function order(options) {
  this.add("role: order, op: checkout", function (args, respond) {
    console.log("Inside order");
    var order = this.make$("orders");
    const orderid = Math.floor(Math.random() * 100);
    order.orderid = orderid;

    order.books = args.books;
    order.save$(function (err) {
      if (err) throw err;
      console.log("order taken");
      respond(null, { orderid });
    });
  });
};
