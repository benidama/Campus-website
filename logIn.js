const logInForm = document.getElementById("loginForm");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const loginError = document.getElementById("login-error");

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  let getData = JSON.parse(localStorage.getItem("SignupData")) || [];
  const loggedData = getData.find(
    (user) => user.useremail === userEmail && user.userpassword === userPassword
  );

  if (loggedData) {
    localStorage.setItem("userLoggedIn", JSON.stringify(loggedData));
    window.location.href = "index.html";
  } else {
    loginError.textContent = "Email or password not found";
  }
});
