const express = require('express');
const router = express.Router();
const { handleImageGeneration } = require('../controllers/imageController');

router.post('/', handleImageGeneration);

module.exports = router;
