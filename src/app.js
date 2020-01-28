import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';

import router from './routes';

// Express
const app = express();

// Logger
app.use(logger('tiny'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(cors());

// Limiter
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
}));

// Routes
app.use('/', router);

// Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Server Error');
});

// Start Server
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));
