import TodoStorage from "./storage.js";


class LocalStorage {
  
  static setTask() {
    const todoList = TodoStorage.getTasks();
    localStorage.setItem("todo", JSON.stringify(todoList));
  };

  static getTasks() {
    const todo = localStorage.getItem("todo");
    const todoList = (todo) ? JSON.parse(todo) : null;
    return todoList;
  };
    
};


export default LocalStorage;
