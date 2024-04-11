const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle POST requests for "/api/countries"
app.post('/api/countries', (req, res) => {
    const { name, countries } = req.body;
    const numCountries = countries.length;
    const confirmationMessage = `Thank you, ${name}, for providing your travel information. You have visited ${numCountries} countries.`;
    res.json({ message: confirmationMessage });
});

// Serve the HTML page from the "views" directory
app.use(express.static('views'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});