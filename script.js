//your JS code here. If required.
const gridContainer = document.querySelector(".grid");
const form = document.querySelector("#form");
let previousSelectedElement = null;

function removePreviousColor() {
	if (previousSelectedElement) {
        previousSelectedElement.style.backgroundColor = "white";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // inputId, color

    let cellId = form.inputId.value; // "3"
    let selectedColor = form.color.value; // "#fjf88"

    // inputId = "3"
    // selectedColor = "#e7e7e7" ;
    let cell = document.getElementById(cellId);
    cell.style.backgroundColor = selectedColor;
    removePreviousColor();

    previousSelectedElement = cell;

	form.reset();
});

for (let i = 1; i <= 9; i++) {
    const gridItem = document.createElement("div");
    gridItem.id = i;
    gridItem.innerText = i;
    gridItem.className = "grid-item"
    gridContainer.appendChild(gridItem);
}