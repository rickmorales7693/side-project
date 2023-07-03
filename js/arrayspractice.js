//Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
function allIndexesOf(array, value) {
    const indexes = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            indexes.push(i);
        }
    }
    return indexes;
}

console.log(allIndexesOf(["apple", "banana", "orange", "apple", "pineapple"], "apple"));
//Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
function removeAll(array, value) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeAll(["apple", "banana", "orange", "apple", "pineapple"], "apple"));

// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));

// Make a function called coinFlip() that returns either 0 or 1, randomly
function coinFlip() {
    return Math.floor(Math.random() * 2);
}

console.log(coinFlip());
// Make a function called twoDice() that returns the sum of rolling two six sided dice.
function twoDice() {
    return randomIntBetween(1, 6) + randomIntBetween(1, 6);
}

console.log(twoDice());

// Make a function called twentySidedDie() that returns a random integer between 1 and 20.
function twentySidedDie() {
    return randomIntBetween(1, 20);
}

console.log(twentySidedDie());

// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
function twelveSidedDie() {
    return randomIntBetween(1, 12);
}

console.log(twelveSidedDie());

// Make a function called tetrahedron() that returns a random integer between 1 and 4.
function tetrahedron() {
    return randomIntBetween(1, 4);
}

console.log(tetrahedron());

// Make a function called rollDie() that returns an integer between 1 and 6.
function rollDie() {
    return randomIntBetween(1, 6);
}

console.log(rollDie());

// Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
function listOfRolls(num) {
    let rolls = [];
    for (let i = 0; i < num; i++) {
        rolls.push(rollDie());
    }
    return rolls;
}

console.log(listOfRolls(5));

// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    let rolls = [];
    for (let i = 0; i < numberOfRolls; i++) {
        rolls.push(diceFunction());
    }
    return rolls;
}

console.log(listOfRollsFromDieFunc(5, rollDie));

// This function should take in two arguments:
// The first argument is the number of rolls you want to make.
// The second argument is a function that contains the function definition for the type of die you want to roll.
// For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.
function listOfDieRollsFromDieFunc(numRolls, dieFunc) {
    const rolls = [];
    for (let i = 0; i < numRolls; i++) {
        const rollResult = dieFunc();
        rolls.push(rollResult);
    }
    return rolls;
}
function tetrahedron2() {
    const sides = [1, 2, 3, 4];
    const randomIndex = Math.floor(Math.random() * sides.length);
    return sides[randomIndex];
}

const rolls = listOfDieRollsFromDieFunc(5, tetrahedron2);
console.log(rolls); // Example output: [3, 1, 4, 2, 3]



/**
 * JS Array Practice
 * Intermediate Array practice: array creation, iteration, and manipulation
 */

// Exercise 0. Write a function named first() that returns only the first element of an array
function first(array) {
    return array[0];
}

console.log(first([1, 2, 3, 4, 5]));

// Exercise 1. Write a function named secondToLast() that returns the second to last element
function secondToLast(array) {
    return array[array.length - 2];
}

console.log(secondToLast([1, 2, 3, 4, 5]));

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
function rest(array) {
    return array.slice(1);
}

console.log(rest([1, 2, 3, 4, 5]));

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
function getLongestString(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}

console.log(getLongestString(["apple", "banana", "orange", "pineapple"]));

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
function getShortestString(array) {
    let shortest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length < shortest.length) {
            shortest = array[i];
        }
    }
    return shortest;
}

console.log(getShortestString(["apple", "banana", "orange", "pineapple"]));

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
function addTwoArrays(array1, array2) {
    return array1.concat(array2);
}

console.log(addTwoArrays([1, 2, 3], [4, 5, 6]));

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
function getUniqueValues(array) {
    let unique = [];
    for (let i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i]);
        }
    }
    return unique;
}

console.log(getUniqueValues(["a", "b", "a", "b", "c", "c"]));

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// Exercie 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
function getRandomQuote() {
    let quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

console.log(getRandomQuote());

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"
function getIndexesOf(character, string) {
    let indexes = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            indexes.push(i);
        }
    }
    return indexes;
}

console.log(getIndexesOf("a", "banana"));
console.log(getIndexesOf("z", "banana"));

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]
function removeAll2(array, value) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            output.push(array[i]);
        }
    }
    return output;
}

console.log(removeAll2([1, 2, 3], 2));
console.log(removeAll2([2, 2, 3, 4, 5, 2, 2], 2));

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
function firstTenFibonacciNumbers() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(firstTenFibonacciNumbers());

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers
function getNFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(getNFibonacci(10));

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]
function moveFirstToLast(array) {
    let first = array.shift();
    array.push(first);
    return array;
}

console.log(moveFirstToLast([1, 2, 3, 4]));


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]
function zip(array1, array2) {
    let output = [];
    for (let i = 0; i < array1.length; i++) {
        output.push([array1[i], array2[i]]);
    }
    return output;
}

console.log(zip([1, 2, 3], [4, 5, 6]));
console.log(zip(["a", "b", "c"], ["x", "y", "z"]));