// script.js

function saveSignupInfo() {
  localStorage.setItem('username', document.getElementById('username').value);
  localStorage.setItem('birthdate', document.getElementById('birthdate').value);
  localStorage.setItem('email', document.getElementById('email').value);
}

function savePassword() {
  if (document.getElementById('password').value === document.getElementById('confirmpassword').value) {
    localStorage.setItem('password', document.getElementById('password').value);
    alert('Signup successful!');
  } else {
    alert('Passwords do not match!');
  }
}

function login() {
  var savedUsername = localStorage.getItem('username');
  var savedPassword = localStorage.getItem('password');
  var enteredUsername = document.getElementById('loginusername').value;
  var enteredPassword = document.getElementById('loginpassword').value;

  if (savedUsername === enteredUsername && savedPassword === enteredPassword) {
    alert('Login successful!');
    // Redirect or perform further actions here
  } else {
    alert('Incorrect username or password');
    window.location.href = "index.html";
  }
}
