(() => {
  const todosForm = document.querySelector(".todos-form");
  const todosInput = document.querySelector(".todos-form input");
  const todosUl = document.querySelector(".todos-ul");
  const TODOS_KEY = "todos";
  let todos = [];

  function handleCheckBox(event) {
    const li = event.target.parentElement;
    todos = todos.map((todo) => {
      if (todo.id === parseInt(li.id)) {
        todo.check = event.target.checked;
        if (event.target.checked) {
          li.children[1].classList.add("todo-complete");
        } else {
          li.children[1].classList.remove("todo-complete");
        }
      }
      return todo;
    });
    saveTodo();
  }

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
    saveTodo();
  }

  function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    checkBox.checked = newTodoObj.check || false;
    checkBox.addEventListener("click", handleCheckBox);
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    newTodoObj.check && span.classList.add("todo-complete");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("delete-todo");
    button.addEventListener("click", deleteTodo);

    li.appendChild(checkBox);
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
      check: false,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
  }
  getTodos();
  todosForm.addEventListener("submit", handleTodos);
})();
