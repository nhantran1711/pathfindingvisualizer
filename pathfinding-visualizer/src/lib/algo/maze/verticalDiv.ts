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
} : {
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    row: number;
    col: number;
    height: number;
    width: number;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType
}) {
    const makeWall = col + getRandInt(0, width - 1) * 2 + 1;
    const makePassage = row + getRandInt(0, height) * 2

    for (let i = 0; i < 2 * height - 1; i ++ ) {
        if (makePassage !== row + i) {
            if (!isEqual(grid[row + i][makeWall], startTile) && !isEqual(grid[row + i][makeWall], endTile)) {
                grid[row + i][makeWall].isWall = false;

                document.getElementById(`${row + i}-${makeWall}`)!.className = `${WALL_TILE_STYLE} animate-wall`
                await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5)
            }
        }
    }

    await recursiveDiv({
        grid,
        startTile,
        endTile,
        row,
        col,
        height,
        width: (makeWall - col + 1) / 2,
        setIsDisabled,
        speed
    })

    await recursiveDiv({
        grid,
        startTile,
        endTile,
        row,
        col,
        height,
        width: width - (makeWall - col + 1) / 2,
        setIsDisabled,
        speed
    })
}