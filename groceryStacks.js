// groceryStacks.js

const stack = [];

// Peek function to check if the stack is empty and return the top item
function peek() {
  if (stack.length === 0) {
    console.log("Stack is empty.");
    return null;
  } else {
    return stack[stack.length - 1]; // Return the top item
  }
}

function push(item) {
  stack.push(item); // Add the item to the top
  console.log(`Pushed: "${item}"`);
  console.log("Updated Stack:", stack);
  console.log("Top Item (Peek):", peek());
}

// Pop function to remove the last added item from the stack
function pop() {
  if (stack.length === 0) {
    console.log("Cannot pop. Stack is empty.");
    return null;
  } else {
    const removedItem = stack.pop(); // Remove the top item
    console.log(`Popped: "${removedItem}"`);
    console.log("Updated Stack:", stack);
    console.log("Top Item (Peek):", peek());
    return removedItem;
  }
}

// Get five grocery items from the user
for (let i = 0; i < 5; i++) {
  const item = prompt(`Enter grocery item ${i + 1}:`);
  push(item); // Add each item to the stack
}

// Demonstrate popping items from the stack
console.log("\nPopping items from the stack:");
for (let i = 0; i < 5; i++) {
  pop();
}
