import type { GridType, TileType } from "../../../utls/types";

export async function recursiveDiv({
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
    speed: number
}) {
    // Base case
    if (height <= 1 || width <= 1) {
        return;
    }

    // Define horizontaly if height of the grid is greated then width of the grid
    if (height > width) {
        await createHorizont
    }
}