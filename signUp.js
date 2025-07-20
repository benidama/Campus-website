const signupform = document.getElementById("signupForm");
const Name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = Name.value.trim();
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();
  const userValues = {
    username: userName,
    useremail: userEmail,
    userpassword: userPassword,
  };

  let getData = JSON.parse(localStorage.getItem("SignupData")) || [];
  let userExist = false;
  getData.forEach((e) => {
    if (e.useremail === userEmail || e.username === userName) {
      userExist = true;
    }
  });
  if (userExist) {
    alert("User is existed");
  } else {
    getData.push(userValues);
    localStorage.setItem("SignupData", JSON.stringify(getData));
    window.location.href = "logIn.html";
  }

  signupform.reset();
});
