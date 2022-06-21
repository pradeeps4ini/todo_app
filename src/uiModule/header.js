const header = function() {
  const pageHeader = `
    <h1>Tooo Dooo</h1>
  `;
  
  const header = document.createElement("header");
  header.innerHTML = pageHeader;
  return header;
};

export default header;
