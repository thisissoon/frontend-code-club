// Create a variable to store the current value of count
let count = 0;

// Create a variable to store the `<p>` element in our index.html file
const counterElement = document.querySelector('.counter');


// Function that increase the count value and update the DOM with the new value
function increase() {
  count = count + 1;
  updateDOM();
}

// Function that decreases the count value and update the DOM with the new value
function decrease() {
  count = count - 1;
  updateDOM();
}

// Function to update the `<p>` element DOM with the updated value of counter
function updateDOM() {
  counterElement.innerHTML = count;
}
