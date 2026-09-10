const { generateImage } = require('../services/imageService');

const handleImageGeneration = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, error: 'Prompt is required' });
    }

    const imageResult = await generateImage(prompt);

    res.status(200).json({
      success: true,
      result: imageResult,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleImageGeneration };
