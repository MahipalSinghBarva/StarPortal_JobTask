const Notifiction = require("../models/Notifiction.js");
const { publishMessage } = require("../config/rabbitMq.js");

const createNotification = async (userId, message) => {
  const notifiction = new Notifiction({ userId, message });
  await notifiction.save();
  await publishMessage("notification", JSON.stringify(notifiction));
  return notifiction;
};

const getNotifications = async (userId) => {
  return await Notifiction.find({ userId });
};

const getNotificationById = async (id) => {
  return await Notifiction.findById(id);
};

const markAsRead = async (id) => {
  const notification = await Notifiction.findById(id);
  if (notification) {
    notification.read = true;
    await notification.save();
  }
  return notification;
};

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  markAsRead,
};
