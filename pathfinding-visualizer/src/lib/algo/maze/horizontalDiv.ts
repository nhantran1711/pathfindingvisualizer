import { SPEEDS, WALL_TILE_STYLE } from "../../../utls/constants";
import { getRandInt, isEqual, sleep } from "../../../utls/helpers";
import type { GridType, SpeedType, TileType } from "../../../utls/types";
import { recursiveDiv } from "./recursiveDiv";

export async function horizontalDiv({
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
    // Possible wall rows: odd rows inside the section (excluding borders)
    const possibleWallRows = [];
    for (let r = row + 1; r < row + height - 1; r += 2) {
        possibleWallRows.push(r);
    }

    // If no valid wall row (section too thin), return
    if (possibleWallRows.length === 0) return;

    const makeWall = possibleWallRows[getRandInt(0, possibleWallRows.length - 1)];

    // Possible passage columns: even columns inside the section (including borders)
    const possiblePassageCols = [];
    for (let c = col; c < col + width; c += 2) {
        possiblePassageCols.push(c);
    }

    const makePassage = possiblePassageCols[getRandInt(0, possiblePassageCols.length - 1)];

    // Build horizontal wall at makeWall except at passage column
    for (let c = col; c < col + width; c++) {
        if (c !== makePassage && !isEqual(grid[makeWall][c], startTile) && !isEqual(grid[makeWall][c], endTile)) {
            grid[makeWall][c].isWall = true;
            const tileElement = document.getElementById(`${makeWall}-${c}`);
            if (tileElement) {
                tileElement.className = `${WALL_TILE_STYLE} animate-wall`;
            }
            await sleep(10 * (SPEEDS.find((s) => s.value === speed)?.value ?? 1) - 5);
        }
    }

    // Recursively divide top and bottom sub-sections
    const topHeight = makeWall - row;
    const bottomHeight = row + height - makeWall - 1;

    await recursiveDiv({ grid, startTile, endTile, row, col, height: topHeight, width, setIsDisabled, speed });
    await recursiveDiv({ grid, startTile, endTile, row: makeWall + 1, col, height: bottomHeight, width, setIsDisabled, speed });
}
