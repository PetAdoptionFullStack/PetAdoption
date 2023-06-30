const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const loginPopup = document.getElementById("loginPopup");
const signupPopup = document.getElementById("signupPopup");

//show/hide fn

function togglePopup(popup) {
    popup.classList.toggle("show");
  }

  //event
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    togglePopup(loginPopup);
  });
  
  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    togglePopup(signupPopup);
  });
