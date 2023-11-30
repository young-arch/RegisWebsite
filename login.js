// login.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var loginForm = document.getElementById("loginForm");
  
    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function (event) {
      // Get the username and password input values
      var username = document.getElementById("Username").value;
      var password = document.getElementById("Password").value;
  
      // Check if either username or password is empty
      if (username.trim() === "" || password.trim() === "") {
        // Prevent the form from being submitted
        event.preventDefault();
        
        // Show an alert to the user
        alert("Username and password are required!");
      }

      else{
        openDashboardPage();
      }
      function openDashboardPage(){
        window.open('Registration.html');
      }
    });

   
  });
  