import { getUntraversedNeighbors } from "../../utls/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../utls/helpers";
import type { GridType, TileType } from "../../utls/types";

export const dijkstra = (grid: GridType, startTile: TileType, endTile: TileType) => {
    const traversedTiles = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;
    const unTraversedTiles = [base];

    while (unTraversedTiles.length > 0) {
        unTraversedTiles.sort((a, b) => a.distance - b.distance)
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