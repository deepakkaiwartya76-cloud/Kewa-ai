const express = require('express');
const cors = require('cors');
const { port, frontendUrl } = require('./config/env');
const errorMiddleware = require('./middleware/errorMiddleware');

const chatRoutes = require('./routes/chatRoutes');
const imageRoutes = require('./routes/imageRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

// API Routes
app.use('/api/chat', chatRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/file', fileRoutes);

// Global Error Handling Middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`🚀 Kewa AI Server running smoothly on port ${port}`);
});
