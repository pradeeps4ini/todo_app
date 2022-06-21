import header from "./header.js";
import navigation from "./nav.js";
import main from "./main.js";
import footer from "./footer.js";
import createInputForm from "./taskInputForm.js";
import Task from "../jsModules/task.js";

const BODY = document.querySelector("body");
BODY.classList.add("grid");


const domElements = function() {
  const addTask = document.querySelector(".add-task-btn");
 
  const taskDialog = document.querySelector(".task-dialog"); 
  const taskSubmitBtn = document.querySelector(".submit-task");
  
  return { addTask, taskDialog, taskSubmitBtn };
};


const addEvents = function() {

  const domElems = domElements();

  domElems.addTask.addEventListener("click", () => {
    domElems.taskDialog.showModal();
  });

  domElems.taskSubmitBtn.addEventListener("click", e => {
    domElems.taskDialog.close();
    Task.taskInputCollector(e);
  });
};


const renderHTML = function() {

  [header, navigation, main, createInputForm, footer].forEach(item => BODY.appendChild(item()));
  addEvents();
};


export default renderHTML;
