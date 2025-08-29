// -------- Part 1: Variables & Conditionals --------
let age = prompt("Enter your age:");
const ageResult = document.getElementById("ageResult");

if (age >= 18) {
  ageResult.textContent = "You are an adult.";
} else {
  ageResult.textContent = "You are a minor.";
}

// -------- Part 2: Functions --------
// Function 1: greet user by name
function greet(name) {
  return `Hello, ${name}!`;
}

// Function 2: calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("greetResult").textContent = greet("Kenya");
document.getElementById("totalResult").textContent = "Total price: $" + calculateTotal(50, 3);

// -------- Part 3: Loops --------
const colors = ["red", "green", "blue"];
const colorList = document.getElementById("colorList");

// for loop to list colors
for (let i = 0; i < colors.length; i++) {
  const li = document.createElement("li");
  li.textContent = colors[i];
  colorList.appendChild(li);
}

// while loop countdown from 5
let count = 5;
let countText = "Countdown: ";
const countDown = document.getElementById("countDown");

while (count > 0) {
  countText += count + " ";
  count--;
}
countDown.textContent = countText;

// -------- Part 4: DOM Manipulation --------
// Change page title text
document.getElementById("title").textContent = "Welcome to JavaScript Mastery!";

// Toggle dark mode on button click
document.getElementById("myBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Create and append a new paragraph dynamically
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newParagraph);