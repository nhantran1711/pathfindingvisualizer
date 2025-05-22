import { MAX_COLS, MAX_ROWS } from "./constants";
import type { GridType, TileType } from "./types";

const returnHeuristicsCost = (currentTile: TileType, endTile: TileType) => {
    let distance = 1;
    const row = Math.abs(currentTile.row - endTile.row);
    const col = Math.abs(currentTile.col - endTile.col);
    distance = distance * (row + col);
    return distance;
}

export const initHeuristicsCost = (grid: GridType, endTile: TileType) => {
    const heuristicsCost = [];
    for (let i = 0; i < MAX_ROWS; i ++ ) {
        const row = [];
        for (let j = 0; j < MAX_COLS; j ++ ) {
            row.push(returnHeuristicsCost(grid[i][j], endTile));
        }
        heuristicsCost.push(row);
    }
}