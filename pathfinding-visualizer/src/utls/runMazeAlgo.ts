import { binaryTree } from "../lib/algo/maze/binaryTree";
import { constructBorder } from "./constructBorder";
import type { GridType, MazeType, SpeedType, TileType } from "./types";

export const runMazeAlgo = async ({
    maze,
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed
} : {
    maze: MazeType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType;
}) => {
    if ( maze === "BINARY_TREE") {
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed)
    }
    else if (maze === "RECURSIVE_DIV") {
        await constructBorder(grid, startTile, endTile)
    }
}