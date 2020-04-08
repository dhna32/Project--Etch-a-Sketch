const gridContainer = document.querySelector('#gridContainer');
const gridSize = 720;
const array = 64;

const canvasGrid = gridSize/array;
console.log(canvasGrid);

for (let i = 0; i < array; i++) {
    const row = document.createElement('div');
    row.classList.add = 'grid';
    row.className = 'grid';
    for (let j = 0; j < array; j++) {
        const grid = document.createElement('div');
        grid.style.height = `${canvasGrid-2}px`;
        grid.style.width = `${canvasGrid-4}px`;
        grid.classList.add = 'grid';
        grid.className = 'grid';
        row.appendChild(grid);
        console.log(grid);
        
        
    }
    gridContainer.appendChild(row)
}