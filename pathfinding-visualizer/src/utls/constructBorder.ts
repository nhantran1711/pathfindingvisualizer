import { MAX_COLS, MAX_ROWS, SLEEP_TIME, WALL_TILE_STYLE } from "./constants";
import { isEqual, sleep } from "./helpers";
import type { GridType, TileType } from "./types";

export async function constructBorder(
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) {
    // Top and bottom borders
    for (let col = 0; col < MAX_COLS; col++) {
        for (const row of [0, MAX_ROWS - 1]) {
            if (!isEqual(grid[row][col], startTile) && !isEqual(grid[row][col], endTile)) {
                grid[row][col].isWall = true;
                const tileElement = document.getElementById(`${row}-${col}`);
                if (tileElement) {
                    tileElement.classList.add(...WALL_TILE_STYLE.split(" "), "animate-wall");
                }
                await sleep(SLEEP_TIME);
            }
        }
    }

    // Left and right borders (excluding corners to avoid double-processing)
    for (let row = 1; row < MAX_ROWS - 1; row++) {
        for (const col of [0, MAX_COLS - 1]) {
            if (!isEqual(grid[row][col], startTile) && !isEqual(grid[row][col], endTile)) {
                grid[row][col].isWall = true;
                const tileElement = document.getElementById(`${row}-${col}`);
                if (tileElement) {
                    tileElement.classList.add(...WALL_TILE_STYLE.split(" "), "animate-wall");
                }
                await sleep(SLEEP_TIME);
            }
        }
    }
}
