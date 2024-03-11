const gridFrame = document.createElement('div');
gridFrame.id = 'grid-frame';
let userInput = document.getElementById('user-input');
let submitButton = document.getElementById('submit-button');

let gridDimensions = 16;




function drawGrid(dimensions){
    //Clean up any preexisting grids
    while(gridFrame.lastChild){
        gridFrame.removeChild(gridFrame.lastChild);
    }

    for (let i = 0; i < (dimensions); i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'etch-row';
        for (let j = 0; j< (dimensions); j++) {
            const gridPix = document.createElement('div');
            gridPix.className = 'etch-pixel';
            gridPix.addEventListener('mouseenter',
            () => {
                gridPix.style.backgroundColor = 'green';
            });
            gridPix.addEventListener('mouseleave',
            () => {
                gridPix.style.backgroundColor = 'black';
            });
            gridRow.append(gridPix);
        }
        gridFrame.appendChild(gridRow);
    }
    document.body.appendChild(gridFrame);
}

drawGrid(gridDimensions);