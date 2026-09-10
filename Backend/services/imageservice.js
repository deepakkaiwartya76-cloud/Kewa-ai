const { GoogleGenAI } = require('@google/genai');
const { geminiApiKey } = require('../config/env');

const ai = new GoogleGenAI({ apiKey: geminiApiKey });

const generateImage = async (prompt) => {
  try {
    // Note: Adjust model name based on the specific image generation model supported by the SDK
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', 
      contents: `Generate an image concept or description for: ${prompt}`,
    });
    return response.text;
  } catch (error) {
    console.error('Image Service Error:', error);
    throw new Error('Failed to process image request');
  }
};

module.exports = { generateImage };
