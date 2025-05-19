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
    const makeWall = row + getRandInt(0, height - 1) * 2 + 1 // return the row reflection the wall
    const makePassage = col + getRandInt(0, width) * 2;

    for (let i = 0; i < 2 * width - 1; i ++ ) {
        if (makePassage !== col + i ) {
            if(!isEqual(grid[makeWall][col + i], startTile) && !isEqual(grid[makeWall][col + i], endTile)) {
                grid[makeWall][col + i].isWall = true;

                document.getElementById(`${makeWall}-${col + i}`)!.className = `${WALL_TILE_STYLE} animate-wall`;
                await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5) // by the speed of user selected
            }
        }
    }

    await recursiveDiv({
        grid,
        startTile,
        endTile,
        row,
        col,
        height: (makeWall - row + 1) / 2,
        width,
        setIsDisabled,
        speed
    })

    await recursiveDiv({
    grid,
    startTile,
    endTile,
    row,
    col,
    height: height - (makeWall - row + 1) / 2,
    width,
    setIsDisabled,
    speed
})

}