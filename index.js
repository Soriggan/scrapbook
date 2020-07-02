let createCardButton = document.getElementById("createScrap");
let titleInput = document.getElementById("titleInput");
let messageInput = document.getElementById("messageField");
let cardField = document.getElementById("scrapsField");

function createCard() {
  let scrapTitle = document.createTextNode(titleInput.value);
  let scrapText = document.createTextNode(messageInput.value);
  let card = document.createElement("div");
  let cardTitle = document.createElement("div");
  let cardMessage = document.createElement("div");
  let messageTextField = document.createElement("p");

  card.setAttribute("class", "message-cards card text-white bg-dark m-2 col-3");
  cardTitle.setAttribute("class", "card-header font-weight-bold");
  cardMessage.setAttribute("class", "card-body");

  card.appendChild(cardTitle);
  card.appendChild(cardMessage);
  cardTitle.appendChild(scrapTitle);
  cardMessage.appendChild(messageTextField);
  messageTextField.appendChild(scrapText);
  cardField.appendChild(card);
}

createCardButton.onclick = createCard;
