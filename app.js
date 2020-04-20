const gridContainer = document.querySelector('#gridContainer');
const gridSize = 840;

function reset(){
    gridContainer.innerHTML = '';
}

const gridButton = document.querySelector('#gridButton');

gridButton.addEventListener('click', (e) => {
    reset();
    numberOfSquares = prompt("Select your grid size (1 to 64)");
    let canvasGrid = gridSize/numberOfSquares;
    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement('div');
        row.classList.add = 'grid';
        row.className = 'grid';
        for (let j = 0; j < numberOfSquares; j++) {
            const grid = document.createElement('div');
            grid.style.height = `${canvasGrid-2}px`;
            grid.style.width = `${canvasGrid-5.01}px`;
            grid.classList.add = 'grid';
            grid.className = 'grid';
            row.appendChild(grid);
            console.log(grid);       
        }
        gridContainer.appendChild(row)
    }  
    gridContainer.addEventListener('mouseover', (e) => {
        const gridValue = e.target;
        console.log(gridValue);
        if(gridValue){
            gridValue.style.backgroundColor = 'black';
        }
    });
});

