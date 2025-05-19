import { MAX_COLS, MAX_ROWS } from "../../../utls/constants";
import { createWall } from "../../../utls/createWall";
import { destroyWall } from "../../../utls/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../utls/helpers";
import type { GridType, SpeedType, TileType } from "../../../utls/types";

export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
) => {
    createWall(startTile, endTile, speed);
    await sleep(MAX_ROWS * MAX_COLS);

    // Fill grid with walls except odd-numbered cells and start/end tiles
    for (const row of grid) {
        for (const tile of row) {
            if ((tile.row % 2 === 0 || tile.col % 2 === 0) && !isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                tile.isWall = true;
            }
        }
    }

    for (let row = 1; row < MAX_ROWS; row += 2) {
        for (let col = 1; col < MAX_COLS; col += 2) {
            // Skip bottom-right corner
            if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
                continue;
            }

            if (row === MAX_ROWS - 2) {
                // Only carve right if we're on the last odd row
                await destroyWall(grid, row, col, 1, speed);
            } else {
                // Randomly destroy wall to right or down
                const isRight = getRandInt(0, 2); // 0 or 1
                await destroyWall(grid, row, col, isRight, speed);
            }
        }
    }

    setIsDisabled(false);
};
