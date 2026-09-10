const handleFileUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    res.status(200).json({
      success: true,
      message: 'File uploaded and processed successfully',
      fileDetails: {
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleFileUpload };
