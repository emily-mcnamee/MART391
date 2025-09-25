let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");
let completedCounter = document.getElementById("completed-counter");
let uncompletedCounter = document.getElementById("uncompleted-counter");
/*Grabs references to key HTML elements so we can manipulate them.*/

function addTask() {
  let taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
/*Gets the text from the input box. Prevents adding empty tasks.*/

  let li = document.createElement("li");
  li.className = "task-item";
/*Creates a new list item for the task.*/

  let span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";
  span.onclick = function () {
    span.classList.toggle("completed");
    updateCounters();
  };
/*Adds the task text. Makes it clickable to toggle completion.*/

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-button";
  deleteBtn.onclick = function () {
    listContainer.removeChild(li);
    updateCounters();
  };
/*Adds a delete button to each task. Removes the task when clicked.*/

  li.appendChild(span);
  li.appendChild(deleteBtn);
  listContainer.appendChild(li);

  inputBox.value = "";
  updateCounters();
}
/*Adds the task to the list. Clears the input box. Updates the counters.*/

function updateCounters() {
  let tasks = document.querySelectorAll(".task-text");
  let completed = 0;
  let uncompleted = 0;

  tasks.forEach(task => {
    if (task.classList.contains("completed")) {
      completed++;
    } else {
      uncompleted++;
    }
  });

  completedCounter.textContent = completed;
  uncompletedCounter.textContent = uncompleted;
}
/*Loops through all tasks. Counts how many are completed vs. uncompleted. Updates the numbers on the page.*/