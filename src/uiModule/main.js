const main = function() {
  const mainPage = `
      <h2>Tasks</h2>
      <section class="task-list">
      </section>
  `;

  const mainElem = document.createElement("main");
  mainElem.innerHTML = mainPage;

  return mainElem;
};


export default main;
