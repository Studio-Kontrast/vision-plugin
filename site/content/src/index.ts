import express from 'express';
import { config } from './config';
import { apiRouter } from './routes/api';
import { errorHandler } from './middleware/error-handler';
import { authMiddleware } from './middleware/auth';

const app = express();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/v1', apiRouter);

// Error handling (must be last)
app.use(errorHandler);

// Start server
const port = config.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on :${port}`);
});