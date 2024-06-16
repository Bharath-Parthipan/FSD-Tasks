/**
 * 1. Do the below programs in anonymous function & IFFE
 *      a. Print odd numbers in an array
 *      b. convert all string to title case in string array
 *      c. sum of all numbers in an array
 *      d. Return all the prime numbers in an array
 *      e. Return all the palindromes in an array
 *      f. Return median of two sorted array of the same size
 *      g. Remove duplicates from an array 
 *      h. Rotate an array by k times 
 */

console.log("a. Print odd numbers in an array using anonymous function & IFFE");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function (arr) {
  let oddNumbers = arr.filter(function (number) {
    return number % 2 !== 0;
  });
  console.log(oddNumbers);
})(arr);
// ================================================================================================================================ //
console.log("b. convert all string to title case in string array using anonymous function & IFFE");
let strarr = ["hello world", "this is a test", "javascript is fun"];
(function (arr) {
  let titleCasedArray = arr.map(function (str) {
    return str
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
  console.log(titleCasedArray);
})(strarr);
// ================================================================================================================================ //
console.log("c. sum of all numbers in an array using anonymous function & IFFE");
let numarr = [1, 2, 3, 4, 5, 6, 7];
(function (arr) {
  let sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);
})(numarr);
// ================================================================================================================================ //
console.log("d. Return all the prime numbers in an arrayusing anonymous function & IFFE");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 23, 29];
(function (arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }
  let primeNumbers = arr.filter(function (number) {
    return isPrime(number);
  });

  console.log(primeNumbers);
})(nums);
// ================================================================================================================================ //
console.log("e. Return all the palindromes in an array using anonymous function & IFFE");
let palindromeStr = ["radar", "hello", "level", "world", "madam", "civic", "racecar"];
(function (arr) {
  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
  }
  let palindromeArray = arr.filter(function (item) {
    return isPalindrome(item);
  });
  console.log(palindromeArray);
})(palindromeStr);
// ================================================================================================================================ //
console.log("f. Return median of two sorted array of the same size using anonymous function & IFFE");
let firstArr = [1, 3, 5];
let secondArr = [2, 4, 6];
(function (arr1, arr2) {
  let combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  let length = combinedArray.length;
  let median;
  if (length % 2 === 0) {
    median = (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
  } else {
    median = combinedArray[Math.floor(length / 2)];
  }

  console.log(median);
})(firstArr, secondArr);
// ================================================================================================================================ //
console.log("g. Remove duplicates from an array using anonymous function & IFFE");
let sampleArr = [1, 2, 2, 3, 4, 4, 5];
(function (arr) {
  let uniqueArray = arr.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });

  console.log(uniqueArray);
})(sampleArr);
// ================================================================================================================================ //
console.log("h. Rotate an array by k times using anonymous function & IFFE");
let a = [1, 2, 3, 4, 5];
let k = 3;
(function (arr, k) {
  let rotations = k % arr.length;
  for (let i = 0; i < rotations; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  console.log(arr);
})(a, k);
// ================================================================================================================================ //

/**
 * 2. Do the below programs in arrow function
 *      a. Print odd numbers in an array
 *      b. convert all string to title case in string array
 *      c. sum of all numbers in an array
 *      d. Return all the prime numbers in an array
 *      e. Return all the palindromes in an array
 */

console.log("a. Print odd numbers in an array using Arrow Function");
let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = arrs.filter((number) => number % 2 !== 0);
console.log(oddNumbers);
// ================================================================================================================================ //
console.log("b. convert all string to title case in string array using Arrow Function");
let strings = ["hello world", "this is a test", "javascript is fun"];
let titleCasedArray = strings.map((str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
});
console.log(titleCasedArray);
// ================================================================================================================================ //
console.log("c. sum of all numbers in an array using Arrow Function");
let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log(sum);
// ================================================================================================================================ //
console.log("d. Return all the prime numbers in an array using Arrow Function");
let numbersarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 23, 29];
let primeNumbers = numbersarr.filter((number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
});
console.log(primeNumbers);
// ================================================================================================================================ //
console.log("e. Return all the palindromes in an array using Arrow Function");
let stringsarr = ["radar", "hello", "level", "world", "madam", "civic", "racecar"];
let palindromes = stringsarr.filter((string) => {
  let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedString === cleanedString.split("").reverse().join("");
});
console.log(palindromes);