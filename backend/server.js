const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Tour Backend API');
});

// Sign-up API
app.get('/signup', (req, res) => {
    const { username, email, phone, password } = req.body;

    const query = `INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)`;
    db.run(query, [username, email, phone, password], function (err) {
        if (err) {
            return res.status(400).json({ error: "User already exists or invalid input" });
        }
        res.json({ message: "User registered successfully", userId: this.lastID });
    });
});

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        res.json({ message: "Login successful", user: row });
    });
});

// Contact Us API
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    db.run(`INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`, [name, email, message], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Message sent successfully", contactId: this.lastID });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
