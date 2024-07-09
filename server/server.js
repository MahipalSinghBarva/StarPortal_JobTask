const http = require("http");
const app = require("./app");
const {
  connectSocket,
  startNotificationConsumer,
} = require("./real-time/realTimeServer.js");

const server = http.createServer(app);

const startServer = async () => {
  connectSocket(server);
  await startNotificationConsumer();

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
startServer()
