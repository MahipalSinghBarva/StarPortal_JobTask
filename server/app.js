const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db.js");
const { connectRabbitMQ } = require("./config/rabbitMq.js");
const {
  connectSocket,
  startNotificationConsumer,
} = require("./real-time/realTimeServer.js");
const authRoutes = require("./auth/authController.js");
const notificationRoutes = require("./notifictions/notificationController.js");
const errorHandler = require("./middleware/errorHandler");
const swaggerDocs = require("./docs/swagger");

dotenv.config();

const app = express();

const initializeApp = async () => {
    await connectDB();
    await connectRabbitMQ();
  
    app.use(express.json());
    app.use(cookieParser());
  
    app.use('/api/auth', authRoutes);
    app.use('/api/notifications', notificationRoutes);
  
    app.use(errorHandler);
  
    swaggerDocs(app);
  };
  
  initializeApp();

module.exports = app;
