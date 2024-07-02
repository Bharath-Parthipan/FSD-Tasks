/**
 * Fetches dog images for various HTTP status codes.
 * @returns {Promise<Array>} A promise that resolves to an array of dog image URLs.
 */
function fetchDogPictures() {
  const statusCodes = [
    100, 200, 201, 202, 204, 301, 302, 400, 401, 403, 404, 502,
  ];
  const dogPictures = statusCodes.map((code) => `https://http.dog/${code}.jpg`);
  return new Promise((resolve) => {
    resolve(dogPictures);
  });
}

/**
 * Renders dog pictures on the webpage.
 * @param {Array} pictures - An array of dog picture URLs.
 */
function renderDogPictures(pictures) {
  const dataContainer = document.getElementById("data-container");
  pictures.forEach((picture) => {
    const card = createCard(picture);
    dataContainer.appendChild(card);
  });
}

/**
 * Creates a Bootstrap card for each dog picture.
 * @param {string} pictureUrl - The URL of the dog picture.
 * @returns {HTMLElement} The card element containing the dog picture.
 */
function createCard(pictureUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";
  cardDiv.style.padding = "0px";

  const cardBody = `
        <img src="${pictureUrl}" class="card-img-top" alt="Dog Picture">
    `;

  cardDiv.innerHTML = cardBody;
  return cardDiv;
}

/**
 * Initializes the data fetch and rendering.
 */
function init() {
  fetchDogPictures()
    .then((pictures) => {
      renderDogPictures(pictures);
    })
    .catch((error) => {
      console.error("Error fetching dog pictures:", error);
    });
}

// Initialize the app when the window loads
window.onload = init;


function getUrl() {
  // Get the input value
  var inputValue = document.getElementById("urlInput").value;

  // Set the href attribute of the anchor element
  var link = document.getElementById("myLink");
  link.href = inputValue;
}