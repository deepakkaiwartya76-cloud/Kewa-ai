const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { handleFileUpload } = require('../controllers/fileController');

router.post('/', upload.single('file'), handleFileUpload);

module.exports = router;
