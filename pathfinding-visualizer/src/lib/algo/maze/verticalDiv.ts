import { SPEEDS, WALL_TILE_STYLE } from "../../../utls/constants";
import { getRandInt, isEqual, sleep } from "../../../utls/helpers";
import type { GridType, SpeedType, TileType } from "../../../utls/types";
import { recursiveDiv } from "./recursiveDiv";

export async function verticalDiv({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed
}: {
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    row: number;
    col: number;
    height: number;
    width: number;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType;
}) {
    // Possible wall columns: odd columns inside the section (excluding borders)
    const possibleWallCols = [];
    for (let c = col + 1; c < col + width - 1; c += 2) {
        possibleWallCols.push(c);
    }

    // If no valid wall col (section too thin), return
    if (possibleWallCols.length === 0) return;

    const makeWall = possibleWallCols[getRandInt(0, possibleWallCols.length - 1)];

    // Possible passage rows: even rows inside the section (including borders)
    const possiblePassageRows = [];
    for (let r = row; r < row + height; r += 2) {
        possiblePassageRows.push(r);
    }

    const makePassage = possiblePassageRows[getRandInt(0, possiblePassageRows.length - 1)];

    // Build vertical wall at makeWall except at passage row
    for (let r = row; r < row + height; r++) {
        if (r !== makePassage && !isEqual(grid[r][makeWall], startTile) && !isEqual(grid[r][makeWall], endTile)) {
            grid[r][makeWall].isWall = true;
            const tileElement = document.getElementById(`${r}-${makeWall}`);
            if (tileElement) {
                tileElement.className = `${WALL_TILE_STYLE} animate-wall`;
            }
            await sleep(10 * (SPEEDS.find((s) => s.value === speed)?.value ?? 1) - 5);
        }
    }

    // Recursively divide left and right sub-sections
    const leftWidth = makeWall - col;
    const rightWidth = col + width - makeWall - 1;

    await recursiveDiv({ grid, startTile, endTile, row, col, height, width: leftWidth, setIsDisabled, speed });
    await recursiveDiv({ grid, startTile, endTile, row, col: makeWall + 1, height, width: rightWidth, setIsDisabled, speed });
}
