(() => {
  const todosForm = document.querySelector(".todos-form");
  const todosInput = document.querySelector(".todos-form input");
  const todosUl = document.querySelector(".todos-ul");
  const TODOS_KEY = "todos";
  let todos = [];

  function getTodos() {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos) {
      todos = JSON.parse(savedTodos);
      todos.forEach(paintTodo);
    }
  }

  function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }

  function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodo(todos);
  }

  function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todosUl.appendChild(li);
  }

  function handleTodos(event) {
    event.preventDefault();
    const newTodo = todosInput.value;
    todosInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
  }
  getTodos();
  todosForm.addEventListener("submit", handleTodos);
})();
