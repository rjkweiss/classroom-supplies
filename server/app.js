require('express-async-errors');

// import environment variables to application
require('dotenv').config();

// instantiate express and application
const express = require('express');
const app = express();

// test route for '/'
app.get('/', (req, res, next) => {
    res.json({
        message: 'API server is running'
    });
});

// handle for missing routes (404) error
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found'
    });
});


// set port and listen for incoming requests
const port = process.env.PORT || 4200;

app.listen(port, () => {
    console.log('Server is listening on port ', port);
});
