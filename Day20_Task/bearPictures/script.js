/**
 * Fetches bear pictures data from the Placeholder API.
 * @returns {Promise<Array>} A promise that resolves to an array of bear pictures URLs.
 */
function fetchBearPictures() {
  // Simulating an array of bear pictures from the API
  const bearPictures = [
    "https://placebear.com/g/500/250",
    "https://placebear.com/g/350/250",
    "https://placebear.com/g/300/250",
    "https://placebear.com/g/400/250",
    "https://placebear.com/g/200/250",
    "https://placebear.com/g/200/150",

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
  let parts = pictureUrl.split("/"); // Split the URL by '/'
  let width = parts[4];       // The width is the 5th element (index 4)
  let height = parts[5];
  const cardDiv = document.createElement("div");
  cardDiv.style.width = `${width}px`;
  cardDiv.style.height = `${height}px`;
    

  const cardBody = `<img src="${pictureUrl}" class="card-img-top" alt="Bear Picture">`;

  console.log(pictureUrl);

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

function getUrl() {
  // Get the input value
  var inputValue = document.getElementById("urlInput").value;

  // Set the href attribute of the anchor element
  var link = document.getElementById("myLink");
  link.href = inputValue;
}