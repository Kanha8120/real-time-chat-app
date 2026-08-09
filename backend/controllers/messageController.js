const Message = require("../models/Message");

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch messages"
    });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { username, message } = req.body;

    const newMessage = await Message.create({
      username,
      message
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      message: "Failed to send message"
    });
  }
};

module.exports = {
  getMessages,
  sendMessage
};