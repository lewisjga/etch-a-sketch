const gridFrame = document.createElement('div');
gridFrame.id = 'grid-frame';

let gridDimensions = 16;

for (let i = 0; i < (gridDimensions); i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'etch-row';
    for (let j = 0; j< (gridDimensions); j++) {
        const gridPix = document.createElement('div');
        gridPix.className = 'etch-pixel';
        gridRow.append(gridPix);
    }
    gridFrame.appendChild(gridRow);
}

document.body.appendChild(gridFrame);