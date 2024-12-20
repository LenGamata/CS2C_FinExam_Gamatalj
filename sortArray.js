// sortArray.js

let numbersInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57):");
let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert the input strings into arrays
let numbers = numbersInput.split(",").map(Number); // Convert to numbers array
let names = namesInput.split(",").map(name => name.trim()); // Convert to trimmed strings array

// Merge the arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse Order):", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.sort();
console.log("Sorted Names (Alphabetical Order):", sortedNames);
