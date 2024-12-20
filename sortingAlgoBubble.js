// sortingAlgoBubble.js

let numbers = [];

// Function to get user input and populate the array
for (let i = 0; i < 10; i++) {
  let num = prompt(`Enter number ${i + 1}:`);
  numbers.push(Number(num)); // Push each number to the array
}

// Function to perform Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  // Outer loop for each pass
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    
    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
      
      // If the current element is greater, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        
        console.log(`Swapping ${arr[j + 1]} and ${arr[j]}`);
      }
    }
    
    // If no elements were swapped, the array is already sorted
    if (!swapped) break;
    
    console.log(`Array after pass ${i + 1}:`, arr);
  }
}

// Perform Bubble Sort on the numbers array
console.log("Original Array:", numbers);
bubbleSort(numbers);

// Log the final sorted array
console.log("Sorted Array:", numbers);
