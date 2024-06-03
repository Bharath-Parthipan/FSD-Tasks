/**
 * 1. How to compare two JSON have the same properties without order?
 *          a.let obj1 = {name: "person1", age: 5};
 *          b.let obj2 = {age: 5, name: "person1"};
 */

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let obj3 = { age: 5, name: "person2" };

function compareJSONObjects(obj1, obj2) {
    // Get the keys of both objects
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Check if both objects have the same number of keys
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys and their values are the same in both objects
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log(compareJSONObjects(obj1, obj2)); // it will return true
console.log(compareJSONObjects(obj1, obj3)); // it will return false