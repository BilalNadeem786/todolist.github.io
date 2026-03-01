const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoEmpty = document.getElementById("todoEmpty");
const todoCount = document.getElementById("todoCount");

let tasks = [];

function updateUI() {
  todoList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const actions = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "action edit";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "action delete";
    deleteBtn.onclick = () => deleteTask(index);

    actions.append(editBtn, deleteBtn);
    li.appendChild(actions);

    todoList.appendChild(li);
  });

  todoCount.textContent = `${tasks.length} task${tasks.length !== 1 ? "s" : ""}`;
  todoEmpty.style.display = tasks.length === 0 ? "block" : "none";
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    updateUI();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateUI();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task === "") return;

  tasks.push(task);
  todoInput.value = "";
  updateUI();
});

updateUI();
