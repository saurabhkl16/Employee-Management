const loginBtn = document.getElementById("LoginButton");
const loginForm = document.getElementById("LoginForm");

loginBtn.addEventListener("click", (e) => {
  if (loginForm.checkValidity() == true) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "pages/home-page.html";
  }
});
