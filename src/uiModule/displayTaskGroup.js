const displayGroup = function(groupName) {
  const TaskGroups = document.querySelector(".task-groups");
  const p = document.createElement("p");
  p.textContent = groupName;
  TaskGroups.appendChild(p);
};

export default displayGroup;
