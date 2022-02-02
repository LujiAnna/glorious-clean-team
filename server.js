const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

// instantiate the express app
const app = express();
const port = 3000;
const log = console.log;
const path = require('path');

// For POST and PUT request
// parse the body from post/fetch request
// app.use(express.json());
// Parse html post forl for processing
// app.use(express.urlencoded)({ extended: false});

// app.use(express.static('public'));

// send email
// app.post('/email', (req, res) => {
//   // access the incoming data and display it on terminal
//   console.log('Data: ', req.body);
//   // send msg back to client
//   res.json({message: 'Message received !!'})
// });

// send the html file into this slot
// app.get('/contact', (req, res) => {
//   // res.send('Hello World!');
//    // Before res.send() 
//     console.log(res.headersSent); 
//     // res.send('OK');
//   res.sendFile(path.join(__dirname, 'contact.html'))
// });

// app.listen(port, () => log(`Server app listening at http://localhost:${port}`));