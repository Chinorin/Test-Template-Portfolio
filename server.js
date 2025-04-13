const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});
 
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
  });

app.get('/search.js', (req, res) => {
    res.sendFile(path.join(__dirname +  '/search.js'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
