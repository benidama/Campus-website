const signupform = document.getElementById("signupForm");
const Name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = Name.value.trim();
  const useremail = email.value.trim();
  const userpassword = password.value.trim();
  const userValues = { userName, useremail, userpassword };

  if (!exist) {
    return;
  }

  let getData = JSON.parse(localStorage.getItem("SignupData")) || [];
  getData.push(userValues);
  localStorage.setItem("SignupData", JSON.stringify(getData));
  signupform.reset();
  console.log(getData);
});
