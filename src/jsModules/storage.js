const TODO = {
              allTasks: [],
              today: [],
              week: [],
              month: [],
              group: {}
};


class TodoStorage {

  static storeTask(id, task) {
    TODO.allTasks[id] = task;
  };

  static saveTaskToday(id, task) {
    TODO.today[id] = task; 
  };

  static saveTaskWeek(id, task) {
    TODO.week[id] = task; 
  };

  static saveTaskMonth(id, task) {
    TODO.month[id] = task;
  };

  static saveTaskGroup(id, task, taskGroup) {
    if (taskGroup in TODO.group) {
      TODO.group[taskGroup][id] = task;
    } else {
      TODO.group[taskGroup] = [];
      TODO.group[taskGroup][id] = task;
    }
  };


  static getTasks() {
    return TODO;
  };

  static getAllTasks() {
    const allTasks = TODO.allTasks;
    return allTasks;
  };

  static getTodayTasks() {
    return TODO.today;
  };

  static getWeekTasks() {
    return TODO.week;
  };

  static getMonthTasks() {
    return TODO.month;
  };

  static getGroupTask(taskGroup) {
    const groups = TODO.group;
    const groupNames = Object.keys(groups);
    const isGroupPresent =  groupNames.find(item => item === taskGroup);

    return (isGroupPresent) ? TODO.group[taskGroup] : null;
  };


  static removeTask(taskId) {
    const obj = TODO;

    function removeTask(taskId, obj) {
      for (let item in obj) {
        if (Array.isArray(obj[item])) {
          obj[item].splice(taskId, 1)
        } else {
          removeTask(taskId, obj[item]);
  	    }
      };  
    };

    removeTask(taskId, obj);
  };
};


export default TodoStorage;
