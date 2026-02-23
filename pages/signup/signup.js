const signupBtn = document.getElementById("SignupButton");
const loginBtn = document.getElementById("LoginButton");
const signupForm = document.getElementById("SignupForm");

signupBtn.addEventListener("click", (e) => {
  if (signupForm.checkValidity() == true) {
    e.preventDefault();
    window.location.href = "../../index.html";
  }
});
loginBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
