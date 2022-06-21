const navigation = function() {

  const navPage = `
      <div>
        <button class="add-task-btn">Add Task</button>
      </div>
      
      <div class="task-sorted flex f-col">
        <button class="all-tasks-btn">All Tasks</button>
        <button class="today-btn">Today</button>
        <button class="week-btn">Week</button>
        <button class="month-btn">Month</button>
      </div>
      
      <div class="task-groups">
        <h4>Task Groups</h4>
      </div>
  `;

  const nav = document.createElement("nav");
  ["flex", "f-col"].forEach(item => nav.classList.add("class", item));
  
  nav.innerHTML = navPage;
  return nav;
};

export default navigation;
