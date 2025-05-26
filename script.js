const addButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const taskCategory = document.getElementById("task-category");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  const categoryIcon = taskCategory.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${categoryIcon} ${taskText} <button class="delete">Usuń</button>`;

        li.querySelector(".delete").addEventListener("click", function() {
      li.remove();
    });
    
    taskList.appendChild(li);
    taskInput.value = "";
  }
});