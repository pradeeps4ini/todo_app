import taskConstructor from "./taskConstructor.js";
import TodoStorage from "./storage";
import SortTask from "./sortTask";
import LocalStorage from "./localStorage.js";


function generateId() {
  const allTasks = TodoStorage.getAllTasks();
  return Object.keys(allTasks).length;
}


class Task {

  static taskInputCollector(e) {
    const title = e.target.parentNode.elements["title-input"].value;
    const note = e.target.parentNode.elements["note-textarea"].value;
    const dueDate = e.target.parentNode.elements["date-input"].value;
    const priority = e.target.parentNode.elements["task-priority"].value;
    const group = e.target.parentNode.elements["task-group"].value;

    const task = new taskConstructor(title, note, dueDate, group, priority);
    
    Task.storeTask(task);
    return task;
  };


  static storeTask(task) {
    const id = generateId();

    const dueDate = task.dueDate;  
    const taskGroup = task.taskGroup;
   
    if (dueDate != "") {
      const isTodayTask = SortTask.today(dueDate);
      const isMonthlyTask = SortTask.month(dueDate);
      const isWeeklyTask = SortTask.week(dueDate);
    
      if (isTodayTask) TodoStorage.saveTaskToday(id, task);
      if (isMonthlyTask) TodoStorage.saveTaskMonth(id, task);
      if (isWeeklyTask) TodoStorage.saveTaskWeek(id, task);
    }

    TodoStorage.storeTask(id, task);
    if (taskGroup != "") TodoStorage.saveTaskGroup(id, task, taskGroup);
    LocalStorage.setTask();
  };  

  static getLastTask() {
    const allTasks = TodoStorage.getAllTasks();
    const taskId = generateId();
    const lastTask = allTasks[taskId - 1];

    return lastTask;
  };
};


export default Task;
