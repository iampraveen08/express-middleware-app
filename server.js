const express = require('express');
const logger = require('./middleware/logger');
const timestamp = require('./middleware/timestamp');

const app = express();
const port = 3000;

app.use(logger);
app.use(timestamp);

app.get('/', (req, res) => {
    console.log('Route Handler: Sending Response');
    res.send(`Hello, Middleware! Request received at ${req.timestamp}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
