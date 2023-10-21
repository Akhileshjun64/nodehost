const express = require("express");
const User = require("./model"); // Import your User model
const app = express();

app.use(express.json());

// Import your database configuration (db.js)
const mongoose = require("./database");

// Create a new user (POST request)
app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User creation failed" });
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
