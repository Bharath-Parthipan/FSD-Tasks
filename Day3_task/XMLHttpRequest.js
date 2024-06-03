/**
 * 2. Use the rest contries'API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console
 */

let http = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";
let method = "GET";

http.open(method, url);

http.onreadystatechange = function () {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      let res = JSON.parse(http.responseText);
      displayAllCountryFlages(res);
      displayCountryDetails(res);
  } else if (http.readyState === XMLHttpRequest.DONE && http.status != 200) {
    console.log("Error");
  }
};

http.send();

function displayAllCountryFlages(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].flags.png);
  }
}

/**
 * 3. Use the same rest countries and print all countries name, regions, sub_regions, and populations
 */
function displayCountryDetails(data) {
  console.log(data);
    for (let i = 0; i < data.length; i++) {
        let countryData = [];
        countryData.push(
          "Country Name : " + data[i].name.common,
          "Region : " + data[i].region,
          "Sub Region : " + data[i].subregion,
          "Population : " + data[i].population
        );
        console.log(countryData);
      }
}