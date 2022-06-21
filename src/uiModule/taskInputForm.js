
function createInputForm() {
  
  const form = `
    <form action='' method='dialog' class='task-form'> 
      <div>
        <label for='task-title' class='task-title'>Title: </label> 
        <input type='text' id='task-title' name='title-input'> 
      </div> 
      <div> 
        <label for='textarea' class='task-textarea'>Note: </label> 
        <textarea id='textarea' name='note-textarea' cols='30' rows='3'></textarea> 
      </div> 
      <div> 
        <label for='task-date' class='date-input'>Due Date</label> 
        <input type='date' id='task-date' name='date-input'> 
      </div> 
      <div> 
        <label for='priority'>Priority: </label> 
        <select id='priority' name='task-priority' class='task-priority'> 
          <option>High</option> 
          <option>Low</option> 
        </select> 
      </div> 
      <div> 
        <label for='task-group' class='group-name'>Task Group: </label> 
        <input type='text' id='task-group' class='task-group' name='group'> 
      </div> 
      <button type="button" class='submit-task'>Submit Task</button>
    </form>
    `;

  const dialog = document.createElement("dialog");
  dialog.classList.add("task-dialog");
  dialog.innerHTML = form;
  return dialog;
}


export default createInputForm;
