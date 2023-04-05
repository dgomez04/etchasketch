
//get the DOM for grid
const grid = document.querySelector("#grid");

//get DOM for grid size
const gridSize = document.querySelector("#grid-size");

//eventListener, every time value changes in gridSize
gridSize.addEventListener('input',() =>  {
    addGrid(gridSize.value);
});

//function : for each i in grid size, add square to grid
function addGrid(gridSize) {

}