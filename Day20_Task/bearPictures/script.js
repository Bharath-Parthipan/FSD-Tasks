/**
 * Fetches bear pictures data from the Placeholder API.
 * @returns {Promise<Array>} A promise that resolves to an array of bear pictures URLs.
 */
function fetchBearPictures() {
  // Simulating an array of bear pictures from the API
  const bearPictures = [
    "https://placebear.com/300/200",
    "https://placebear.com/400/300",
    "https://placebear.com/500/400",
    "https://placebear.com/600/500",
    "https://placebear.com/700/600",
    "https://placebear.com/800/700",
  ];
  return new Promise((resolve) => {
    resolve(bearPictures);
  });
}

/**
 * Renders bear pictures on the webpage.
 * @param {Array} pictures - An array of bear pictures URLs.
 */
function renderBearPictures(pictures) {
  const dataContainer = document.getElementById("data-container");
  pictures.forEach((picture) => {
    const card = createCard(picture);
    dataContainer.appendChild(card);
  });
}

/**
 * Creates a Bootstrap card for each bear picture.
 * @param {string} pictureUrl - The URL of the bear picture.
 * @returns {HTMLElement} The card element containing the bear picture.
 */
function createCard(pictureUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";
  cardDiv.style.padding = "0px";
  cardDiv.style.height = "100%";
    

  const cardBody = `
        <img src="${pictureUrl}" class="card-img-top" alt="Bear Picture">
    `;

  cardDiv.innerHTML = cardBody;
  return cardDiv;
}

/**
 * Initializes the data fetch and rendering.
 */
function init() {
  fetchBearPictures()
    .then((pictures) => {
      renderBearPictures(pictures);
    })
    .catch((error) => {
      console.error("Error fetching bear pictures:", error);
    });
}

// Initialize the app when the window loads
window.onload = init;
