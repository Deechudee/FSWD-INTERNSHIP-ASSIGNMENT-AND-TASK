const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Sample users (acts like a fake DB)
const users = [
  { id: 1, name: 'Deekshitha' },
  { id: 2, name: 'Rahul' },
  { id: 3, name: 'Anjali' }
];

// GET /users API endpoint
app.get('/users', (req, res) => {
  res.json(users);
});

module.exports = app;

