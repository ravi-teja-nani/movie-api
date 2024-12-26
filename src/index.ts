import express from 'express';
import bodyParser from 'body-parser';
import { movieRoutes } from './routes/movieRoutes';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Movie routes
app.use('/api', movieRoutes);

// Only start the server if this file is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export { app };
