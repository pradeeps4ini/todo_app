class Task {
  constructor(title, note, dueDate, taskGroup=null, priority="low") {
    this.title = title;
    this.note = note;
    this.dueDate = dueDate;
    this.taskGroup = taskGroup;
    this.priority = priority;
  };
}


export default Task;
