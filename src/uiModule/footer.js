const footer = function() {
  const footerPage = `
      <p>Developed by <a href="">Pradeep Saini</a>
      <img src="" alt="link to github using github icon">
      </p>
  `;

  const footerElem = document.createElement("footer");
  footerElem.innerHTML = footerPage;

  return footerElem;
};

export default footer;
