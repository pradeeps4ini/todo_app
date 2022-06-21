const main = function() {
  const mainPage = `
      <h2>Tasks</h2>
      <section class="task-list">
        <div class="task-item 0">
          <div>
            <p>Task: </p>
            <p>Read 1984</p>
          </div>
          <div>
            <p>Note: </p>
            <p>Read 1984 by George Orwell</p>
          </div>
          <div>
            <p>DueDate: </p>
            <p>21-6-2022</p>
          </div>    
          <div>
            <p>Priority: </p>
            <p>High</p>
          </div>

          <div>
            <button class="edit-btn">ed</button>
            <button class="delete-btn">del</button>
          </div>
        </div>
      </section>
  `;

  const mainElem = document.createElement("main");
  mainElem.innerHTML = mainPage;

  return mainElem;
};


export default main;
