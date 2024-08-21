let container = document.querySelector(".container");
let currentMode = "black";
let gridSize = 16;

document.addEventListener('DOMContentLoaded', () => gridSetup(gridSize));

function setGridSize() {
    const input = document.getElementById("gridSizeInput");
    const newSize = parseInt(input.value);
    if (newSize >= 2 && newSize <= 64) {
        gridSize = newSize;
        gridSetup(gridSize);
    } else {
        alert("Please enter a grid size between 2 and 64.");
    }
}

function gridSetup(gridLength) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', gridLength);
    for (let x = 0; x < gridLength * gridLength; x++) {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.addEventListener("mouseover", () => {
            if (currentMode === "black") {
                div.style.backgroundColor = "black";
            } else if (currentMode === "rainbow") {
                div.style.backgroundColor = getRainbowColor();
            }
        });
        container.appendChild(div);
    }
}

// Function to switch to black mode
function setBlackMode() {
    currentMode = "black";
}

// Function to switch to random color mode
function setRainbowMode() {
    currentMode = "rainbow";
}

const colors = {
    1: "red",
    2: "orange",
    3: "yellow",
    4: "green",
    5: "blue",
    6: "violet"
};

function getRainbowColor() {
    const random = Math.floor(Math.random() * 6) + 1;
    return colors[random];
}

function resetGrid()
{
    const gridItems = document.querySelectorAll(".grid-box");
    gridItems.forEach(item => {
        item.style.backgroundColor = "lightgrey";
    });
}
