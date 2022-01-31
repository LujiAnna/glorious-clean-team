const express = require('express');
const app = express();
const port = 3000;
const log = console.log;
const path = require('path');

// Parse data for processing
app.use(express.urlencoded)({
  extended: false})
});

app.use(express.json());

// send the html file into this slot
app.get('/contact', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(path.join(__dirname, 'contact.html'))
});

// send email
app.post('/email', (req, res) => {
  // send msg back to client
  res.json({message: 'Message received !!'})
});


});

app.listen(port, () => log(`Server app listening at http://localhost:${port}/contact`));