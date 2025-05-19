

// Generate maze using Binary Tree

import { MAX_COLS, MAX_ROWS } from "../../../utls/constants";
import { createWall } from "../../../utls/createWall";
import { isEqual, sleep } from "../../../utls/helpers";
import type { GridType, SpeedType, TileType } from "../../../utls/types";

export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) =>  void,
    speed: SpeedType
) => {
    createWall(startTile, endTile, speed)
    await sleep(MAX_ROWS * MAX_COLS)

    //  Generate maze
    for (const row of grid) {
        for (const tile of row) {
            // tile is even
            if (tile.row % 2 === 0 || tile.col % 2 === 0) {
                // Checking whether is a startTile or Endtile
                if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                    tile.isWall = true;
                }
            }
        }
    }

    for (let row = 1; row < MAX_ROWS; row += 2 ) {
        for (let col = 1; col < MAX_COLS; col += 2 ) {
            if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
                continue
            }
            else if (row === MAX_ROWS - 2) {
                // function destroy wall
                await destroyWall(grid, row, col, 1, speed) // 1 for right
            }
        }
    }
}