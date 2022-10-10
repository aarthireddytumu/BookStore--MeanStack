const seneca = require("seneca")();

const entities = require("seneca-entity");
const mongo_store = require("seneca-mongo-store");
const seneca_amqp_transport = require("seneca-amqp-transport");
seneca
  //.quiet()
  .use(entities)
  .use(seneca_amqp_transport)
  .use(mongo_store, { name: "cloudnativedb", host: "127.0.0.1", port: 27017 })

  .use("cart_plugin");
seneca.ready(function (err) {
  console.log("cart service ready");
  seneca.listen({type: 'web',port:'9091', path: '/cart'});
});
