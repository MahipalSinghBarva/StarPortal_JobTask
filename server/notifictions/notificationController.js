const express = require("express");
const {
  createNotification,
  getNotificationById,
  getNotifications,
  markAsRead,
} = require("./notificationService.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { message } = req.body;
  try {
    const notification = await createNotification(req.user.id, message);
    res.json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const notification = await getNotifications(req.user.id);
    res.json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const notification = await getNotificationById(req.params.id);
    res.json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const notification = await markAsRead(req.params.id);
    res.json(notification);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
