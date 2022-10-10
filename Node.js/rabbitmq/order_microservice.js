var seneca = require("seneca")();
var entities = require("seneca-entity");
const mongostore = require("seneca-mongo-store");
//seneca.quiet();
const seneca_amqp_transport = require("seneca-amqp-transport");
seneca.use(seneca_amqp_transport);
seneca.use(entities);
seneca.use(mongostore, {
  name: "cloudnativedb",
  host: "127.0.0.1",
  port: 27017,
});

seneca.use("order_plugin");
seneca.ready(function (err) {
  console.log("Order service is ready!!!!");
  seneca.listen({
    type: "amqp",
    pin: "role: order,op:*",
    url: "amqp://guest:guest@localhost:5672",
  });
});
