const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});