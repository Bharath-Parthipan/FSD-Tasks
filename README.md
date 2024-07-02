# FSD-Tasks

## Day1-Task
1. Write a blog on Difference between HHTP/1.1 vs HTTP/2.
2. write a blog about objects and its internal representation in Javascript.
3. Read about IP address, port, HTTP methods, MAC address.

## Day2-Task
1. Write a blog on the difference between docunment and window object.

## Day3-TasK
1. How to compare two JSON have the same properites without order ? <br/>
    a. let obj1 = {name: "person1", age: 5};<br/>
    b. let obj2 = {age: 5, name: "person1"};

2. Use the rest contries'API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console.

3. Use the same rest countries and print all countries name, regions, sub_regions, and populations.

## Day4-Task
1. Do the below programs in anonymous function & IFFE <br>
     a. Print odd numbers in an array<br>
     b. convert all string to title case in string array<br>
     c. sum of all numbers in an array<br>
     d. Return all the prime numbers in an array<br>
     e. Return all the palindromes in an array<br>
     f. Return median of two sorted array of the same size<br>
     g. Remove duplicates from an array<br>
     h. Rotate an array by k times 

2. Do the below programs in arrow function <br>
     a. Print odd numbers in an array<br>
     b. convert all string to title case in string array<br>
     c. sum of all numbers in an array<br>
     d. Return all the prime numbers in an array<br>
     e. Return all the palindromes in an array

## Day5-Task
1. Create your own resume data in JSON Format
2. For the above JSON, iterate over all for loops (for, for in, for of, forEach)

## Day6-Task
1. Class - Movie

     The class Movie is stated below.
     An instance of class Movie represents a film.
     This class has the following three properties:
     
     - title, which is a String representing the title of the movie
     - studio, which is a String representing the studio that made the movie
     - rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
     
     a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
     
     b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
     
     c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
     
     d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

2. Circle - Class

     Convert the UML diagram to Typescript class.
         - use number for double

     ![](./assets/image/ClassDiagram_Circle.png)


3. Write a "person" class to hold all the details.

4.  write a class to calculate the Uber price

## Day7-Task ARRAY METHODS

1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all)

     a. Get all the countries from Asia continent /region using Filter method <br>
     b. Get all the countries with a population of less than 2 lakhs using Filter method <br>
     C. Print the following details name, capital, flag, using forEach method <br>
     d. Print the total population of countries using reduce method <br>
     e. Print the country that uses US dollars as currency

## Day12-Task Frontend Design

1. OBESITY CHILDHOOD STATISTICS ["view site"](https://bharath-parthipan.github.io/FSD-Tasks/Day12_Task/obesity-childhood-statistics/index.html).

2. kAZI NAZRUL ISLAM ["view site"](https://bharath-parthipan.github.io/FSD-Tasks/Day12_Task/kazi-nazrul-islam/index.html).

## Day15-Task

1. Problem statement " DOM MANIPULATION WITH FORM ".
     * Create a form and table using HTML, CSS and DOM.
     * The form should contain the following field.
     * First name, last name, Email, address, pincode, gender, choice of food(must choose at least 2 out of 5 options), state, country.
     * On submission of the form values, the values must be appended to the table.
     * The columns of the table must contain First name, last name, Email, address, pincode, gender, food, state, country.
     * Clear the form fields after updating the record in the table.
     * Include the test suite in your html file which is given below.

     Result : Task Completed ["view site"](https://bharath-parthipan.github.io/FSD-Tasks/Day15_Task/html-forms/index.html).


2. Problem statement " CALCULATE TASK"
     * Create a calculator using DOM.
     * Use Keyboard events only for numbers.
     * When any keys pressed other than number keys show an alert warning "Only numbersare allowed".
     * Add functions to perform addition, subtraction, division, multiplication and modulus.
     * The calculator must handle infix expressions.
     * Use DOM to create html elements
     * For styles you can use ess and bootstrap. UI should be responsive for all media screens.
     * Include the test suite in your html file which is given below..

     Optional: Implement calculator operations of (M+, M-. MC) memory based functionalities using the localstorage.

     Result : Task Completed ["view site"](https://bharath-parthipan.github.io/FSD-Tasks/Day15_Task/calculator/index.html).

## Day16-Task

1. Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen.

     Constraints

          * Do not use named functions
          * Do not use a set interval function.
          * Do not use recursion
          * Do not use IIFEs & named functions.
          * Do not use looping
          * Use call back hell to display the timer.
          * All JavaScript codes should be in a script file named script.js which has to be imported into your HTML page.
     
     Result : Task Completed ["view site"](https://bharath-parthipan.github.io/FSD-Tasks/Day16_Task/index.html).

## Day17-Task

1. Implement the rest countries and Open weather map APIs using fetch() API.

     Constraints:

     * All your HTML elements should be created with DOM.
     * Use only fetch() API to get both rest countries' data and open weather.
     * Pass the necessary value from the rest countries' API to openweathermap.org to get the current weather data of the selected country.
     * Use Bootstrap cards to display the necessary data on the screen
     * All JavaScript codes should be in a script file named script.js which has to be imported inside of the body element of your HTML file.
     * Display the below values in the Bootstrap card.

          * Capital
          * Latlng
          * Flag
          * Region
          * Name 
          * Country codes

     Result : Task Completed ["view site"](https://bharath-parthipan.github.io/FSD-Tasks/Day17_Task/index.html).

## Day20-Task Promise Task

1. From the below URL use any 3 API to implement the tasks with listed below constraints https://github.com/public-apis/public-apis

     Constraints:

     * UI should be responsive & look and feel
     * Use Promise to retrieve data & display the necessary things on the webpage.
     * Your project/task should obtain the maximum code quality as below

          * Proper variable & function names
          * Use of catch for the fetch
          * Should not use any deprecated tags
          * Should avoid inline styles
          * Should use only class selectors
          * Proper open & close of HTML tags
          * Comments/description of the function logic
          * Your task project should follow code reusability

     * USE ONLY HTML,CSS, BOOTSTRAP. & JAVASCRIPT

     Result : 
     * api1 Bear Pictures Completed ["view site"](https://bharath-fsd-tasks.netlify.app/day20_task/bearpictures/). <br>
     * api2 http Status Cats Completed ["view site"](https://bharath-fsd-tasks.netlify.app/day20_task/httpstatuscat/). <br>
     * api3 http status dogs Completed ["view site"](https://bharath-fsd-tasks.netlify.app/day20_task/httpstatusdog/).
