// lloNodeListing.js

class Node {
  constructor(value) {
    this.value = value; // Set the value of the node
    this.next = null; // The next node is initially null
  }
}

// LinkedList class to manage the list
class LinkedList {
  constructor() {
    this.head = null; // Initial head of the list is null
    this.size = 0; // Initial size of the list is 0
  }

  // Append function to add a new node to the list
  append(value) {
    const newNode = new Node(value); // Create a new node with the given value

    if (this.head === null) {
      // If the list is empty, set the new node as the head
      this.head = newNode;
    } else {
      // Traverse the list to find the last node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      // Set the next property of the last node to the new node
      current.next = newNode;
    }

    this.size++; // Increment the size of the list
    this.print(); // Print the list after adding the new node
  }

  // Print function to display the entire list
  print() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Linked List:", result.join(" -> "));
  }
}

// Create a new linked list
const linkedList = new LinkedList();

// Append items to the linked list
linkedList.append("Data Structures-Array");
linkedList.append("Variable Type-Integer");
linkedList.append("Sorting Algorithm-Bubble Sort");
