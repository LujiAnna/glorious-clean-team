// Listen to event on form when user clicks SendQuote
function sendQuote() {
  let formElement = document.getElementById("contact-form");

// Get values from the form
  let nameElement = document.getElementById("name");
  let nameValue = nameElement.value;
  console.log('name: ', nameValue);

  let emailElement = document.getElementById("email");
  let emailValue = emailElement.value;
  console.log('email: ', emailValue);

  let gebouwElement = document.getElementById("gebouw");
  // error reading value using value property

  let messageElement = document.getElementById("message");
  let messageValue = messageElement.value;
  console.log('message: ', messageValue);

  // Store input values in an object
  const mail = { nameValue, emailValue, messageValue };

  console.log('function works: type mail below ');
  console.log(mail);


  // send data from form to server using base url:https://gloriousclean.be/contact.html 
  // const url = 'https://gloriousclean.be/contact.html/send';
const url = 'http://localhost:3000/contact.html/send'
  // const otherPara = {
  //   headers: {
  //     "content-type":"application/json"; charset=UTF-8
  //   },
  //   body: data,
  //   method: "POST"
  // };

  fetch(url, { // returns a promise
    method: "post", // specify method as post
    body: mail, // specify body as mail to send to request
  }) 
  .then(response => response.json()) // converting promise to JSON
  .then(res => console.log(res)) // view the response from server later after server is set
  .catch(error=>console.log(error))
}