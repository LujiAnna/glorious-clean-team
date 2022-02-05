const form = document.querySelector(".contact-form");
const button = document.getElementById("sendQuote");
let names = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

const formEvent = form.addEventListener("submit", (e) => {
    e.preventDefault();

    formData = {
        names: names.value,
        email: email.value,
        message: message.value
    };

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    //make json object of data
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function (){
      console.log(xhr.responseText);
      if(xhr.responseText == "succes"){
        alert("Email sent");
      }
      else{
        alert("Something went wrong");
      }
    };

    //stringify json data
    xhr.send(JSON.stringify(formData));

});
