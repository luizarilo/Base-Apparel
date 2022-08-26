function validateEmail() {
    let email = document.getElementById("email");
    var icon__error = document.querySelector(".icon");
    var text__error = document.querySelector(".label__forms");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {
      alert("Valid email address!");
      return true;
  
    } else {
  
        text__error.style.display = "inline-block";
        icon__error.style.display = "inline-block";

      return false;
    }
  }