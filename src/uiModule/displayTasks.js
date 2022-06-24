import taskDiv from "./taskItem.js";
import Task from "../jsModules/task.js";

const displayTask = function(task, id) {

  const TASKLIST = document.querySelector(".task-list");
  const taskDomDiv = taskDiv();

  taskDomDiv.children[0].children[1].textContent = task.title;
  taskDomDiv.children[1].children[1].textContent = task.note;
  taskDomDiv.children[2].children[1].textContent = task.dueDate;
  
  taskDomDiv.classList.add(task.priority);
  taskDomDiv.classList.add(id);
  
  taskDomDiv.children[3].children[0].addEventListener("click", Task.editTask);
  taskDomDiv.children[3].children[1].addEventListener("click", Task.removeTask);

  TASKLIST.appendChild(taskDomDiv);
};

export default displayTask; 
