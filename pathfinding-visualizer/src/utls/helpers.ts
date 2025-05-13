import { MAX_COLS, MAX_ROWS } from "./constants";
import type { GridType, TileType } from "./types";


// Create row
const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currentRow = [];
    for (let col = 0; col < MAX_COLS; col ++ ) {
        // The shape of the tile 
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col === endTile.col,
            isStart: row === startTile.row && col === startTile.row,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isTraversed: false,
            parent: null
        })
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
    }
    return grid;
}