const { generateAIResponse } = require('../services/aiService');
const { saveChatMessage } = require('../services/chatService');

const handleChat = async (req, res, next) => {
  try {
    const { message } = req.body;
    const userId = req.user ? req.user.uid : 'anonymous';

    if (!message) {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    const aiReply = await generateAIResponse(message);
    
    // Save history to Firestore
    await saveChatMessage(userId, message, aiReply);

    res.status(200).json({
      success: true,
      reply: aiReply,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleChat };
