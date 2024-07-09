const { consumeMessage } = require("../config/rabbitMq.js");
const socketIO = require('socket.io');

let io;

const connectSocket = (server) => {
  io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

const notifyClients = (message) => {
  io.emit("notification", message);
};

const startNotificationConsumer =  async () => {
  try {
    console.log('Starting notification consumer...');
    await consumeMessage('notifications', (message) => {
      console.log(`Received message: ${message}`);
      
    });
    console.log('Notification consumer started successfully');
  } catch (error) {
    console.error(`Failed to start notification consumer: ${error.message}`);
  }
};

module.exports = {
  connectSocket,
  startNotificationConsumer,
};
