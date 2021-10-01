const loginForm = document.querySelector(".login-form");
const login = document.querySelector("#login");
const userInfo = document.querySelector(".user-info");
const USER_KEY = "loginId";
const HIDDEN_CLASS = "hidden";

function addUser(loginId) {
  localStorage.setItem(USER_KEY, loginId);
}

function toggleLoginBox() {
  const loginId = localStorage.getItem(USER_KEY);
  if (loginId) {
    loginForm.classList.add(HIDDEN_CLASS);
    userInfo.classList.remove(HIDDEN_CLASS);
    userInfo.innerHTML = loginId;
  } else {
    loginForm.classList.remove(HIDDEN_CLASS);
    userInfo.classList.add(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleLogin);
  }
}

function handleLogin(event) {
  event.preventDefault();
  const loginId = login.value;
  login.value = "";
  addUser(loginId);
  toggleLoginBox();
}

toggleLoginBox();
