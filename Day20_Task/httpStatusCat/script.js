/**
 * Fetches cat images for various HTTP status codes.
 * @returns {Promise<Array>} A promise that resolves to an array of cat image URLs.
 */

function fetchCatPictures() {
  const statusCodes = [100, 200, 201, 202, 204, 301, 302, 400, 401, 403, 404, 502];
  const catPictures = statusCodes.map((code) => `https://http.cat/${code}`);
  return new Promise((resolve) => {
    resolve(catPictures);
  });
}

/**
 * Renders cat pictures on the webpage.
 * @param {Array} pictures - An array of cat picture URLs.
 */
function renderCatPictures(pictures) {
  const dataContainer = document.getElementById("data-container");
  pictures.forEach((picture) => {
    const card = createCard(picture);
    dataContainer.appendChild(card);
  });
}

/**
 * Creates a Bootstrap card for each cat picture.
 * @param {string} pictureUrl - The URL of the cat picture.
 * @returns {HTMLElement} The card element containing the cat picture.
 */
function createCard(pictureUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";
  cardDiv.style.padding = "0px";

  const cardBody = `<img src="${pictureUrl}" class="card-img-top" alt="Cat Picture">`;

  cardDiv.innerHTML = cardBody;
  return cardDiv;
}

/**
 * Initializes the data fetch and rendering.
 */
function init() {
  fetchCatPictures()
    .then((pictures) => {
      renderCatPictures(pictures);
    })
    .catch((error) => {
      console.error("Error fetching cat pictures:", error);
    });
}

// Initialize the app when the window loads
window.onload = init;
