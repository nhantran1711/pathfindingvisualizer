import { getUntraversedNeighbors } from "../../utls/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../utls/helpers";
import { initFunctionCost, initHeuristicsCost } from "../../utls/heuristicsCost";
import type { GridType, TileType } from "../../utls/types";

export const aStart = (grid: GridType, startTile: TileType, endTile: TileType) => {
    const traversedTiles = [];
    const heuristicsCost = initHeuristicsCost(grid, endTile);
    const functionCost = initFunctionCost();


    // Init the start
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;

    // Calculate cost
    functionCost[base.row][base.col] = base.distance + heuristicsCost[base.row][base.col];
    base.isTraversed = true; // Setting the animation
    const unTraversedTiles = [base];

    while (unTraversedTiles.length > 0) {
        unTraversedTiles.sort((a, b) => {
            if (functionCost[a.row][a.col] == functionCost[b.row][b.col]) {
                return b.distance - a.distance;
            }
            else {
                return functionCost[a.row][a.col] - functionCost[b.row][b.col]
            }
        }
    )
        const current = unTraversedTiles.shift();
        if (current) {
            if (current.isWall == true ) {
                continue // Skip
            } 
            if (current.distance == Infinity) {
                break;
            }
            current.isTraversed = true;
            traversedTiles.push(current);

            if (isEqual(current, endTile)) {
                break;
            }
            const neighbors = getUntraversedNeighbors(grid, current);
            for (let i = 0; i < neighbors.length; i ++) {
                if (current.distance + 1 < neighbors[i].distance) {
                    dropFromQueue(neighbors[i], unTraversedTiles);
                    neighbors[i].distance = current.distance + 1;
                    functionCost[neighbors[i].row][neighbors[i].col] = neighbors[i].distance + heuristicsCost[neighbors[i].row][neighbors[i].col];
                    neighbors[i].parent = current;
                    unTraversedTiles.push(neighbors[i])
                }
            }
        }
    }
    const path = [];
    let currentTile = grid[endTile.row][endTile.col];
    while (currentTile !== null) {
        currentTile.isPath = true;
        path.unshift(currentTile);
        currentTile = currentTile.parent!;
    }

    return {traversedTiles, path}
}