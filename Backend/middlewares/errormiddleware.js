const errorMiddleware = (err, req, res, next) => {
  console.error('❌ Error caught in middleware:', err.stack);
  
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
};

module.exports = errorMiddleware;
