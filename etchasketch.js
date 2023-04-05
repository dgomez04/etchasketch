
//get the DOM for grid
const grid = document.querySelector("#grid");

//get DOM for grid size
const gridSize = document.querySelector("#grid-size");

//eventListener, every time value changes in gridSize
gridSize.addEventListener('input',() =>  {
    addGrid(gridSize.value);
});

//TODO: Make dynamic div
const square = document.createElement('div');

//function addGrid => appends squares to grid.
function addGrid(gridSize) {
    //600px is canvas side length.
    let sideLength = (600/gridSize);
   
    square.setAttribute("style", `width: ${sideLength}px; height: ${sideLength}px; background-color: black;`)

    for(let i = 0; i < gridSize; i++) {
        grid.appendChild(square);
    }

}