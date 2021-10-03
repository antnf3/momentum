(() => {
  const loginForm = document.querySelector(".login-form");
  const login = document.querySelector("#login");
  const userInfo = document.querySelector(".user-info");
  const userInfoSpan = document.querySelector(".user-info span");
  const logout = document.querySelector(".logout");
  const USER_KEY = "loginId";
  const HIDDEN_CLASS = "hidden";

  const todosForm = document.querySelector(".todos-form");
  const todosUl = document.querySelector(".todos-ul");

  function addUser(loginId) {
    localStorage.setItem(USER_KEY, loginId);
  }

  function handleLogout() {
    localStorage.removeItem(USER_KEY);
    toggleLoginBox();
  }

  function toggleLoginBox() {
    const loginId = localStorage.getItem(USER_KEY);
    if (loginId) {
      loginForm.classList.add(HIDDEN_CLASS);
      userInfo.classList.remove(HIDDEN_CLASS);
      todosForm.classList.remove(HIDDEN_CLASS);
      todosUl.classList.remove(HIDDEN_CLASS);
      userInfoSpan.innerHTML = loginId;
      logout.addEventListener("click", handleLogout);
    } else {
      loginForm.classList.remove(HIDDEN_CLASS);
      userInfo.classList.add(HIDDEN_CLASS);
      todosForm.classList.add(HIDDEN_CLASS);
      todosUl.classList.add(HIDDEN_CLASS);
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
})();
