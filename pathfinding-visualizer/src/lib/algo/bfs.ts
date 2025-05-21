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
    const traversedTile: TileType[] = [];
    const base = grid[startTile.row][startTile.col];

    base.distance = 0;
    base.isTraversed = true;
    const untraversed = [base];

    // while there is still an item
    while (untraversed.length) {
        const tile = untraversed.shift()!;
        if (tile.isWall) {
            continue;
        }
        if (tile.distance == Infinity) {
            break;
        }
        tile.isTraversed = true;
        traversedTile.push(tile);

        if (isEqual(tile, endTile)) {
            break;
        }

        const neighbors = getUntraversedNeighbors(grid, tile);
        for (let i = 0; i < neighbors.length; i ++) {
            if (!isQueue(neighbors[i], untraversed)) {
                const neighbor = neighbors[i];
                neighbor.distance = tile.distance + 1;
                neighbor.parent = tile;
                untraversed.push(neighbor);
            }

        }
    }   

    const path = []
    let tile = grid[endTile.row][endTile.col];
    while (tile !== null) {
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }

    return { traversedTile, path}
}