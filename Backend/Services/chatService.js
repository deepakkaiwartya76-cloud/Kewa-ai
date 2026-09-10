const admin = require('../config/firebase');

const db = admin.firestore();

const saveChatMessage = async (userId, message, reply) => {
  try {
    await db.collection('chats').add({
      userId: userId || 'anonymous',
      message,
      reply,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error saving chat to Firestore:', error);
  }
};

const getChatHistory = async (userId) => {
  try {
    const snapshot = await db.collection('chats')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .limit(20)
      .get();

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return [];
  }
};

module.exports = { saveChatMessage, getChatHistory };
