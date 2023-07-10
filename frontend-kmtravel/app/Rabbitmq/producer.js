const amqplib = require('amqplib');

var amqp_url = process.env.AMQP_URL || 'amqp://localhost:5672';

async function produce() {
    console.log('Producing');
    var conn = await amqplib.connect.apply(amqp_url, "heartbeat=60");
    var ch = await conn.createChannel();
    var exch = 'product_exchange';
    var q = 'product_queue';
    var rkey = 'product_route';
    var msg = 'product has ordered'

    await ch.assertExchange(exch, 'direct', {durable: true}).catch(console.error);
    await ch.assertQueue(q, {durable: true});
    await ch.bindQueue(q, exch, rkey);
    await ch.publish(exch, rkey, Buffer.from(msg));
    setTimeout( function () {
        ch.close();
        conn.close();}, 500);
}
produce();