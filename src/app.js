import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

import router from './routes';

// Express
const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Security
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
app.use(helmet.frameguard({ action: 'sameorigin' }));
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

// GZIP Compression
app.use(compression()); // FIXME: Make use of NGINX (Proxy) Compression

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
