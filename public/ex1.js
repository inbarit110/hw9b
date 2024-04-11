const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// GET request handler to display the form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// POST request handler to process the form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const confirmationMessage = `Thank you, ${name}, for submitting the form. Your email address (${email}) has been received.`;
    res.send(confirmationMessage);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});



