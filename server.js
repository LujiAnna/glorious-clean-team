const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

const username = process.env.USERNAME;
const pass = process.env.PASSWORD;

// instantiate the express app
const app = express();
const PORT = 3000;
const log = console.log;

//Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/contact.html")
});

app.post("/", (req, res)=>{
    console.log(req.body);

    //used to send the emailn
    //Still have to figure out OAuth2 for gmail!
    const transporter = nodemailer.createTransport({
        name: "mailprotect.be",
        host: "smtp-auth.mailprotect.be",
        auth: {
            user: username,
            pass: pass
        }
    });

    //passing information from front end body request
    const mailOptions = {
        from: req.body.email,
        to: username,
        subject: `Nieuw bericht van ${req.body.email}, ${req.body.names}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send("error");
        }else{
            console.log("Email sent: " + info.response);
            res.send("succes");
        }
    });
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});

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