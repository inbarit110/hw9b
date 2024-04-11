const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store articles
let articles = [
    { id: 1, title: 'First Article', content: 'This is the content of the first article.' }
];

// Route to handle POST requests for "/articles"
app.post('/articles', (req, res) => {
    // Get the title and content from the form data
    const { title, content } = req.body;
    
    // Find the maximum ID among existing articles
    const maxId = articles.reduce((max, article) => Math.max(max, article.id), 0);
    
    // Increment the maximum ID by one to get the new article ID
    const newId = maxId + 1;
    
    // Add the new article to the articles array
    articles.push({ id: newId, title, content });
    
    // Send a confirmation message containing the title and ID of the new article
    const confirmationMessage = `New article "${title}" added with ID ${newId}.`;
    res.send(confirmationMessage);
});

// Serve the HTML page from the "views" directory
app.use(express.static('views'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});