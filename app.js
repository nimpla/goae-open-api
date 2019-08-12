import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router';

// Express
const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', router);

// Start Server
app.listen(3000, () => {
    console.log('Server started');
});
