import { MAX_COLS, MAX_ROWS } from "./constants";
import type { GridType, TileType } from "./types";


// Create row
const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    // console.log("createRow called for row:", row);
    const currentRow = [];
    for (let col = 0; col < MAX_COLS; col ++ ) {
        // The shape of the tile 
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col === endTile.col,
            isStart: row === startTile.row && col === startTile.col,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isTraversed: false,
            parent: null
        })
        // console.log(currentRow);
    }
    return currentRow;
}

// Help create grid
export const createGrid = (startTile: TileType, endTile: TileType) => {
    // Push the row after all the col finish 1 row
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row ++) {
        // each row created by creatRow() function then push into the row
        grid.push(createRow(row, startTile, endTile));
        // console.log("Creating row", row);
    }
    return grid;
}


// Check if it starts or ends
export const checkIsStartOrEnd = (row: number, col: number ) => {
    if (row === 1 && col === 1) {
        return true;
    }
    else if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
        return true;
    }
    else {
        return false;
    }
}

// Create a new grid when generate the wall
export const createNewGrid = (grid: GridType, row: number, col: number) => {
    const newGrid = grid.map(r => [...r]); // shallow clone rows 
    const newTile = {
        ...newGrid[row][col], // copy tile
        isWall: !newGrid[row][col].isWall, // toggle create wall
    }

    newGrid[row][col] = newTile;
    return newGrid;
}


// Tile equals
export const isEqual = (x: TileType, y: TileType) => {
    if (x.row === y.row && x.col === y.col) {
        return true;
    }
    return false;
}

// Is row and col equals?
export const isRowAndColEqual = (row: number, col: number, tile: TileType) => {
    if (row === tile.row && col === tile.col) {
        return true;
    }
    return false;
}

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}