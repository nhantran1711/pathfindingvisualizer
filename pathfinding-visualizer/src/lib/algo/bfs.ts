// Shortest path by marking transverse tile

import { getUntraversedNeighbors } from "../../utls/getUntraversedNeighbors";
import { isEqual } from "../../utls/helpers";
import { isQueue } from "../../utls/isQueue";
import type { GridType, TileType } from "../../utls/types";

export const bfs = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles: TileType[] = []; // Start the array
    const base = grid[startTile.row][startTile.col]; // Get the start of array

    base.distance = 0; // Set distance
    base.isTraversed = true; // Mark the start tile as traversed
    const untraversed = [base]; // Start the queue with the start tile

    // while there is still an item
    while (untraversed.length) {
        const tile = untraversed.shift()!; // Get the first tile
        if (tile.isWall) {
            continue; // Skip if there is a wall
        }
        if (tile.distance == Infinity) { //Break if the distance if Infinity
            break; 
        }
        tile.isTraversed = true; // Make the tile as traversed
        traversedTiles.push(tile); // Add it in

        if (isEqual(tile, endTile)) { // Break if ends
            break;
        }

        const neighbors = getUntraversedNeighbors(grid, tile); // Get untraversed neighbors
        for (let i = 0; i < neighbors.length; i ++) {
            if (!isQueue(neighbors[i], untraversed)) {
                // Check if neighbors is not in queue
                const neighbor = neighbors[i];
                neighbor.distance = tile.distance + 1; // Update neighbor's distance
                neighbor.parent = tile;
                untraversed.push(neighbor); // Add the neighbor
            }

        }
    }   

    const path = [] // Array to store the path
    let tile = grid[endTile.row][endTile.col];
    while (tile !== null) {
        // Backtrack until the start tile
        tile.isPath = true;
        path.unshift(tile); // Add the tile to the path
        tile = tile.parent!;
    }

    return { traversedTiles, path};
}