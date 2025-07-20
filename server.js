// backend/server.js
require('dotenv').config(); // ⬅️ THIS LINE

const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoute');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve uploaded files statically if needed
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to handle uploads and GPT
app.use('/api/upload', uploadRoute);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
