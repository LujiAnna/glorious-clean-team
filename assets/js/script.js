function sendQuote() {
  let formElement = document.getElementById("contact-form");

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
  // var text = "";
  // var i;
  // for (i = 0; i < formValue.length ;i++) {
  //   text += formValue.elements[i].value + "<br>";
  // }
  // console.log(text);

  console.log('function works');
  // console.log(formValue.value, nameValue.value, emailValue.value, gebouwValue.value, messageValue.value);

  // document.getElementById("demo").innerHTML = text;
}