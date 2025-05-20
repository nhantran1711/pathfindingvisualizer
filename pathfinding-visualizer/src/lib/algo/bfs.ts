// Shortest path by marking transverse tile

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
    }
}