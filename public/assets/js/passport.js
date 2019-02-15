$(document).ready(function() {
  

  $("#new-password").popover({html: true}) 

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

    const errorMsg = [];

    if(checkPass != password2) {
      console.log("pass does not match");
      // alert("Passwords do not match");
      errorMsg.push(`<li>Passwords do not match.</li>`);
    };

    if(checkPass.length < 8) {
      console.log("Need 8 chars");
      errorMsg.push(`<li>Password needs to be at least 8 characters.</li>`);
    };

    const lowerCaseLetters = /[a-z]/g;
    if(!lowerCaseLetters.test(checkPass)) { 
      console.log("need a lowercase");
      errorMsg.push(`<li>Password must contain at least one lowercase letter.</li>`);
    };

    const upperCaseLetters = /[A-Z]/g;
    if(!upperCaseLetters.test(checkPass)) { 
      console.log("need an uppercase");
      errorMsg.push(`<li>Password must contain at least one uppercase letter.</li>`);
    };

    const numbers = /[0-9]/g;
    if(!numbers.test(checkPass)) { 
      console.log("Need a number");
      errorMsg.push(`<li>Password must contain at least one number.</li>`);
    };

    if (errorMsg.length > 0) {
      console.log("you have some errors")
      console.log(errorMsg);
      const errString = errorMsg.join("\n")
      $("#new-password").popover({'html': true});
      $("#new-password").attr("data-content", errString);
      $('[data-toggle=popover]').popover('show');
      return false;
    }
    else { 
       
      $.ajax({  
      url: "/api/user/register",
      method: "POST",
      data: userInfo
      })
      .then(function(redirectRoute) {
        $("#redirect-modal").modal('show');
        setTimeout(function() {$("#redirect-modal").modal('hide')}, 1500);
        setTimeout(function() {location.replace(redirectRoute); }, 2000);
      })
      .catch(err => console.log(err));  
    }
  });
});
