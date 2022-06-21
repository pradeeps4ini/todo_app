const taskDiv = function() {
  const task = `

    <div>
      <p>Task: </p>
      <p></p>
    </div>
    <div>
      <p>Note: </p>
      <p></p>
    </div>
    <div>
      <p>DueDate: </p>
      <p></p>
    </div>
    <div>
      <p>Priority: </p>
      <p></p>
    </div>
    <div>
      <button class="edit-btn">ed</button>
      <button class="delete-btn">del</button>
    </div>  
  `;

  const div = document.createElement("div");
  div.classList.add("task-item");

  return div;
};

export default taskDiv;
