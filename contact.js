let username = document.querySelector("#username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message")
let button = document.getElementById("submit");

button.addEventListener("click",update);

    function update (event){
        // event.preventDefault();
        if(username.value == "" || email.value == "" || phone.value =="" || message.value ==""){
               alert("Please fill all missing requirements");
           } else {
               alert("Thank you for submitting your input");
           };
    }