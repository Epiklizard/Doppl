const express = require('express');
const app = express();
const path = require('path');

const pg = require('pg');
const cors = require('cors');
const { Pool } = pg;

// middleware
app.use(express.json());  // Middleware to parse JSON requests
app.use(cors());

const pool = new Pool({
    user: 'epiklizard',
    host: 'localhost',
    database: 'pulse',
    password: '280516',
    port: 5432, // Default PostgreSQL port
});

app.post('/handle-login', async (req, res) => {
    console.log('handle-login', req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password_hash = $2', [username, password]);

        if (result.rows.length > 0) {
            res.json({ success: true, user: result.rows[0] });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen('3010', () => {
    console.log(`Server is running on http://localhost:3010`);
});