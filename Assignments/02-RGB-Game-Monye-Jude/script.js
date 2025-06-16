const rgbDisplay = document.getElementById("rgbDisplay");
const boxContainer = document.getElementById("boxContainer");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let colors = [];
let correctColor;

// Function to generate random RGB color
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

// Function to setup game
function setupGame() {
  colors = Array.from({ length: 6 }, () => randomColor());
  correctColor = colors[Math.floor(Math.random() * colors.length)];
  rgbDisplay.textContent = correctColor;

  boxContainer.innerHTML = "";
  colors.forEach((color) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;
    box.addEventListener("click", () => checkColor(box, color));
    boxContainer.appendChild(box);
  });

  message.textContent = "";
}

// Function to handle box clicks
function checkColor(box, color) {
  if (color === correctColor) {
    message.textContent = "Correct!";
    if (message.classList.contains("wrong")) {
      message.classList.remove("wrong");
    }
    message.classList.add("correct");
    const AllBoxes = document.querySelectorAll(".box");
    AllBoxes.forEach((box) => {
      box.style.backgroundColor = correctColor;
      box.classList.add("animate");
    });
  } else {
    message.textContent = "Try Again!";
    box.classList.add("hidden");
    if (message.classList.contains("correct")) {
      message.classList.remove("correct");
    }
    message.classList.add("wrong");
  }
}

// Reset game
resetButton.addEventListener("click", setupGame);

// Start the game
setupGame();
