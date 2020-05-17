let gridSize = 10;
let rows, cells;

// creating a div for adding a newGrid button
const newGridButtonDiv = document.createElement("div");
newGridButtonDiv.setAttribute("id", "new-grid-button-div");

// creating a newGrid button
const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";
newGridButton.setAttribute("id", "new-grid-button");
newGridButton.addEventListener("click", () => {
    gridSize = prompt("Enter the grid size between 1 and 64");
    constructGrid();
});

// adding the button to the newGridButtonDiv
newGridButtonDiv.appendChild(newGridButton);

// creating the colorChooser div
const colorChooserDiv = document.createElement("div");
colorChooserDiv.setAttribute("id", "color-chooser-div");

// creating colorChooser
const colorChooser = document.createElement("input");
colorChooser.setAttribute("type", "color");
colorChooser.setAttribute("id", "color");
colorChooser.setAttribute("value", "#e43f5a");

// adding colorChooser to colorChooserDiv
colorChooserDiv.appendChild(colorChooser);

// creating the gridDivParent
const gridDivParent = document.createElement("div");
gridDivParent.setAttribute("id", "grid-div-parent");

// creating the gridDiv
const gridDiv = document.createElement("div");
gridDiv.setAttribute("id", "grid-div");

// adding gridDiv to gridDivParent
gridDivParent.appendChild(gridDiv);

// constructing the grid
function constructGrid() {
    let lastChild = gridDiv.lastElementChild;
    while (lastChild) {
        gridDiv.removeChild(lastChild);
        lastChild = gridDiv.lastElementChild;
    }
    const totalNoOfCells = gridSize * gridSize;
    let gridItem;
    for (let i = 0; i < totalNoOfCells; i++) {
        gridItem = document.createElement("div");
        gridItem.setAttribute("class", "grid-item");
        gridDiv.appendChild(gridItem);
        console.log(i);
    }
    gridDiv.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;

    addHoverEffect(gridDiv, gridItem, totalNoOfCells);
}

// adding hover effect on cells
function addHoverEffect(gridDiv, gridItem, totalNoOfCells) {
    let allCells = document.querySelectorAll(".grid-item");
    for (let i = 0; i < totalNoOfCells; i++) {
        allCells[i].addEventListener("mouseover", draw);
    }
}

// detecting which color is choosen
function choosenColor() {
    return colorChooser.value;
}

// adding draw functionality when hovered on a grid-item
function draw(e) {
    e.target.style.backgroundColor = choosenColor();
}

const completePage = document.querySelector(".complete-page");
completePage.setAttribute("style", "border: 1px solid black; justify-content: center; height: 100vh; overflow: auto; ");
completePage.appendChild(newGridButtonDiv);
completePage.appendChild(colorChooserDiv);
completePage.appendChild(gridDivParent);
constructGrid();