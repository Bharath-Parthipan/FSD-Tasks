
let http = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";
let method = "GET";

http.open(method, url);

http.onreadystatechange = function () {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      let res = JSON.parse(http.responseText);
      asianCountries(res);
      smallPopulationCountries(res);
      printingCountryDetails(res);
      totalPopulation(res);
      countriesUsingUSD(res);
  } else if (http.readyState === XMLHttpRequest.DONE && http.status != 200) {
    console.log("Error");
  }
};

http.send();

console.log("a. Get all the countries from Asia continent/region using Filter method");
function asianCountries(countries) {
    const asianCountries = countries.filter((country) => country.region === "Asia");
    console.log(asianCountries);
}

console.log("b. Get all the countries with a population of less than 200,000 using Filter method");
function smallPopulationCountries(countries) {
    const smallPopulationCountries = countries.filter((country) => country.population < 200000);
    console.log(smallPopulationCountries);
}

console.log("c. Print the following details name, capital, flag using forEach method");
function printingCountryDetails(countries) {
    countries.forEach((country) => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
    });
}

console.log("d. Print the total population of countries using reduce method");
function totalPopulation(countries) {
    const totalPopulation = countries.reduce((total, country) => total + country.population,0);
    console.log(totalPopulation);
}

console.log("e. Print the country that uses US dollars as currency");
function countriesUsingUSD(countries) {
    const countriesUsingUSD = countries.filter((country) => country.currencies && country.currencies.USD);
    countriesUsingUSD.forEach((country) => console.log(country.name.common));
}

