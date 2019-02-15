$(document).ready(function() {

  $("#login-btn").on("click", function(e) {
    e.preventDefault();

    const userInfo = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    $.ajax({
      url: "/api/user/login",
      method: "POST",
      data: userInfo
    })
    .then(function(redirectRoute){
      console.log(redirectRoute)
      location.replace(redirectRoute);
    })
    .catch(err => console.log(err));
  });

  $("#register-btn").on("click", function(e) {
    e.preventDefault();

    const userInfo = {
      first_name: $("#first-name").val().trim(),
      last_name: $("#last-name").val().trim(),
      email: $("#new-email").val().trim(),
      password: $("#new-password").val().trim()
    };      

    const checkPass = userInfo.password
    const password2 = $("#password2").val().trim();

    if(checkPass.length < 8) {
      alert("Password needs to be at least 8 characters");
      return;
    };

    const lowerCaseLetters = /[a-z]/g;
    if(!lowerCaseLetters.test(checkPass)) { 
      alert("Password must contain at least one lowercase letter");
      return false;
    };

    const upperCaseLetters = /[A-Z]/g;
    if(!upperCaseLetters.test(checkPass)) { 
      alert("Password must contain at least one uppercase letter");
      return false;
    }

    const numbers = /[0-9]/g;
    if(!numbers.test(checkPass)) { 
      alert("Password must contain at least one number");
      return false;
    }

    if(checkPass != password2) {
      alert("Passwords do not match");
      return false
    } 
    else {
      $.ajax({
      url: "/api/user/register",
      method: "POST",
      data: userInfo
      })
      .then(function(redirectRoute) {
      console.log(userInfo);
      location.replace(redirectRoute);
      })
      .catch(err => console.log(err));  
    }
  });
});
