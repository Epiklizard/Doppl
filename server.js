const express = require('express');
const app = express();
const path = require('path');

// middleware
app.use(express.json());  // Middleware to parse JSON requests

app.get('/handle-login', (req, res) => {
    console.log('handle-login');
});

app.listen('3010', () => {
    console.log(`Server is running on http://localhost:3010`);
});