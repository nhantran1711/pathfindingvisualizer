import type { GridType, SpeedType, TileType } from "../../../utls/types";
import { horizontalDiv } from "./horizontalDiv";
import { verticalDiv } from "./verticalDiv";

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
    // Base case: stop if area too small to divide
    if (height <= 1 || width <= 1) {
        return;
    }

    if (height > width) {
        await horizontalDiv({ grid, startTile, endTile, row, col, height, width, setIsDisabled, speed });
    } else {
        await verticalDiv({ grid, startTile, endTile, row, col, height, width, setIsDisabled, speed });
    }
}
