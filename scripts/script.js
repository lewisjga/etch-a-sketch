const gridFrame = document.createElement('div');
gridFrame.id = 'grid-frame';
let submitButton = document.getElementById('submit-button');

let gridDimensions = 16;

submitButton.addEventListener('click', () => {
    let userInput = document.getElementById('user-input').value;
    gridDimensions = userInput;
    drawGrid(gridDimensions);
})


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
                let redVal = Math.floor(Math.random() * 255) + 1;
                let blueVal = Math.floor(Math.random() * 255) + 1;
                let greenVal = Math.floor(Math.random() * 255) + 1;
                let alphaVal = Math.random().toFixed(2);
                gridPix.style.backgroundColor = 'black';
                gridPix.style.backgroundColor = `rgb(${redVal}, ${blueVal}, ${greenVal}, ${alphaVal})`;
            });
            gridRow.append(gridPix);
        }
        gridFrame.appendChild(gridRow);
    }
    document.body.appendChild(gridFrame);
}