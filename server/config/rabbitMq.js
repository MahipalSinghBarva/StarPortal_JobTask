const amqp = require("amqplib");

let channel = null;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();
    console.log("RabbitMQ channel created successfully");

    connection.on("error", (error) => {
      console.error(`RabbitMQ connection error: ${error.message}`);
    });

    connection.on("close", () => {
      console.log("RabbitMQ connection closed");
    });
  } catch (error) {
    console.error(`Failed to connect to RabbitMQ: ${error.message}`);
    throw error;
  }
};

const consumeMessage = async (queue, callback) => {
  if (!channel) {
    console.error("RabbitMQ channel is not created");
    throw new Error("RabbitMQ channel is not created");
  }

  try {
    await channel.assertQueue(queue, { durable: true });
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        callback(msg.content.toString());
        channel.ack(msg);
      }
    });
  } catch (err) {
    console.error(
      `Error in consuming message from queue ${queue}: ${err.message}`
    );
    throw err;
  }
};

const publishMessage = async (queue, message) => {
  if (!channel) {
    throw new Error("RabbitMQ channel is not created");
  }

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message));
};

module.exports = {
  connectRabbitMQ,
  consumeMessage,
  publishMessage,
};
