import taskDiv from "./taskItem.js";


const displayTask = function(task) {

  const TASKLIST = document.querySelector(".task-list");
  const taskDomDiv = taskDiv();

  taskDomDiv.children[0].children[1].textContent = task.title;
  taskDomDiv.children[1].children[1].textContent = task.note;
  taskDomDiv.children[2].children[1].textContent = task.dueDate;
  taskDomDiv.children[3].classList.add(task.priority);

  TASKLIST.appendChild(taskDomDiv);
};

export default displayTask; 
