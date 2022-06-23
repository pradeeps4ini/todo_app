const taskDiv = function() {
  const task = `

    <div class="title">
      <p>Task: </p>
      <p></p>
    </div>
    <div class="note">
      <p>Note: </p>
      <p></p>
    </div>
    <div class="dueDate">
      <p>DueDate: </p>
      <p></p>
    </div>
    <div class="btns">
      <button class="edit-btn">ed</button>
      <button class="delete-btn">del</button>
    </div>  
  `;

  const div = document.createElement("div");
  div.classList.add("task-item");
  div.innerHTML = task;
  return div;
};

export default taskDiv;
