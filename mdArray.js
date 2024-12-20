// mdArray.js
let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

// Convert inputs into arrays
let names = namesInput.split(",").map(name => name.trim());
let ages = agesInput.split(",").map(Number);

// Initialize the multi-dimensional array
let multiDimArray = [names, ages];

// Restructure the multi-dimensional array to pair names with ages
let restructuredArray = [];
for (let i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}

// Log the restructured array
console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(subArray => {
  console.log(subArray);
});
