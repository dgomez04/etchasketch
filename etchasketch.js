

//get the DOM for grid
const grid = document.querySelector("#grid");

//get DOM for grid size & color value
const gridSize = document.querySelector("#grid-size");
const colorValue = document.querySelector("#color");


//get DOM for gridChildren nodes
const nodes = grid.children;

//DOM for eraser & rainbow button
const eraserButton = document.querySelector("#eraserButton");
const rainbowToggle = document.querySelector("#rainbowToggle");


//eventListener, every time value changes in gridSize
gridSize.addEventListener('input',() =>  {
    grid.replaceChildren();
    addGrid(gridSize.value);
});

//eventListener for eraserButton
eraserButton.addEventListener('click', () => {
    clearGrid();
});

//function addGrid => appends squares to grid.
function addGrid(gridSize) {
    //600px is canvas side length.
    let sideLength = (600/gridSize);
   
    for(let i = 0; i < (gridSize**2); i++) {
        const square = document.createElement('div');
        square.setAttribute("style", `width: ${sideLength}px; height: ${sideLength}px;`);
        square.style.backgroundColor= "white";
        square.id = "square" + i;
        grid.appendChild(square);
    }
    changeColor();
}

//adds eventListener to every childNode under grid
//eventListener | if mouse is moving => if left-button is clicked, change color.
function changeColor() {
    for(let i = 0; i < nodes.length; i++) {
        nodes[i].onmousemove = (e) => {
            if(e.buttons == 1) {
                if(rainbowToggle.checked == true) {
                    nodes[i].style.backgroundColor = generateColor();
                } else {
                    nodes[i].style.backgroundColor= `${color.value}`;
                }
            }
        }       
    }
}

//function used by eraserToggle to clear grid.
function clearGrid() {
    for(let i = 0; i < nodes.length; i++) {
        nodes[i].style.backgroundColor = "white";
    }
}

//function used to generate a random RGB value
function generateColor() {
    let rgbValue = [];
    for(let i = 0; i < 3; i++) {
        rgbValue.push(Math.floor(Math.random() * 256));
    }
    return(`rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`);
}

//default grid value
addGrid(gridSize.value);
