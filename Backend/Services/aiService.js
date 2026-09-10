const { GoogleGenAI } = require('@google/genai');
const { geminiApiKey } = require('../config/env');

// Initialize Google Gen AI SDK
const ai = new GoogleGenAI({ apiKey: geminiApiKey });

const generateAIResponse = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to fetch response from AI');
  }
};

module.exports = { generateAIResponse };
