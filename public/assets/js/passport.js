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
  });

});