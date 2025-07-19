const form = document.getElementById("form-container");
const userName = document.getElementById("names");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Name = userName.value.trim();
  const Email = email.value.trim();
  const Password = password.value.trim();
  const userData = {
    Name,
    Email,
    Password,
    createdAt: new Date().toLocaleString("sv"),
  };
  let savedData = JSON.parse(localStorage.getItem("listData")) || [];
  savedData.push(userData);
  localStorage.setItem("listData", JSON.stringify(savedData));
  form.reset();
  renderData(userData);
});

function renderData(container) {
  const postDiv = document.getElementById("list-container");
  const postdiv = document.createElement("div");
  postdiv.className = "post";

  postdiv.innerHTML = `
  <p><strong>Names:</strong> ${container.Name}</p>
  <p><strong>Email:</strong> ${container.Email}</p>
  <p><strong>Password:</strong> ${container.Password}</p>
  <p><strong>createdAt:</strong> ${container.createdAt}</p>
  `;
  postDiv.appendChild(postdiv);
}
