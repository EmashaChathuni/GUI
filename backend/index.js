
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");

const app = express();
const port = 3000;

// Use middleware to parse incoming requests
app.use(express.json());

// Create database instance
const db = new sqlite3.Database("./tour_guide.db");

// Route to handle Sign-up
app.post("/signup", (req, res) => {
  const { username, email, phone, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Error hashing password" });
    }

    // Insert new user into the database
    const query = `INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)`;
    db.run(query, [username, email, phone, hashedPassword], function (err) {
      if (err) {
        return res.status(500).json({ error: "Failed to create user" });
      }
      res.status(201).json({ message: "User created successfully!" });
    });
  });
});

// Route to handle Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Query the database to find the user by username
  const query = `SELECT * FROM users WHERE username = ?`;
  db.get(query, [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Error retrieving user" });
    }

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare provided password with stored hashed password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error comparing password" });
      }

      if (!result) {
        return res.status(400).json({ error: "Incorrect password" });
      }

      // If passwords match, return a success response
      res.status(200).json({ message: "Login successful!" });
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
