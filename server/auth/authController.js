const express = require('express');
const { register, login } = require('./authService');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const token = await register(username, email, password);
    res.cookie("token", token, {httpOnly: true, secure: process.env.NODE_ENV === 'production'})
    res.json({ message: "Register Successfully",token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await login(email, password);
    res.cookie("token", token, {httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    res.json({ message: "Login Successfully", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
