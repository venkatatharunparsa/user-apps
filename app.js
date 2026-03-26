const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    console.log("User Registered:");
    console.log(username, email, password);

    res.send(`Registration Successful 🚀 <br> Welcome ${username}`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});