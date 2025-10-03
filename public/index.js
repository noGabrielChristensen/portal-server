// index.js - Entry point for Grove Portal

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from Public/
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Grove Portal is alive on port ${PORT}`);
});
