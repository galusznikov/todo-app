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

    //przycisk usunięcia

      li.querySelector(".delete").addEventListener("click", function() {
        event.stopPropagation();
        li.remove();
    });

    //oznaczanie zadań jako wykonane
        li.addEventListener("click", function() {
          const existingCheck = li.querySelector(".checkmark");
          if (existingCheck) {
            existingCheck.remove();
          }
          else {
            const check = document.createElement("span");
            check.textContent = " ✔️";
            check.classList.add("checkmark");
            check.style.color = "green";
            li.appendChild(check);
          }
        });

    taskList.appendChild(li);
    taskInput.value = "";
  }
});