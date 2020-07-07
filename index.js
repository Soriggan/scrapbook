let titleInput = document.getElementById("messageTitle");
let messageInput = document.getElementById("messageBody");
let addScrapBtn = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");

let scraps = [];

function renderScraps() {
  scrapsField.innerHTML = "";

  for (const scrap of scraps) {
    let position = scraps.indexOf(scrap);
    scrapsField.innerHTML += createScrapCard(
      scrap.title,
      scrap.message,
      position
    );
  }
}

function addNewScrap() {
  let title = titleInput.value;
  let message = messageInput.value;

  titleInput.value = "";
  messageInput.value = "";

  scraps.push({ title, message });

  renderScraps();
}

function deleteScrap(position) {
  scraps.splice(position, 1);
  renderScraps();
}

function createScrapCard(title, message, position) {
  return `
  <div class="message-cards card text-white bg-dark m-2 col-3">
    <div class="card-header font-weight-bold">${title}</div>
    <div class="card-body">
      <p class="card-text">
        ${message}
      </p>
      <div class="w-100 d-flex justify-content-end pr-2 pb-2">
      <button type="button" class="btn btn-danger mr-1" onclick="deleteScrap(${position})">Excluir</button>
      <button type="button" class="btn btn btn-primary" onclick="openEditModal">Editar</button>
      </div>
      
      
    </div>
  </div>
  `;
}

function openEditModal() {
  $("#editModal").modal("toggle");
}

renderScraps();
addScrapBtn.onclick = addNewScrap;
