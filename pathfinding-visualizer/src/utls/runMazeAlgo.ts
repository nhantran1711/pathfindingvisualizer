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
        await binary_tree(grid, startTile, endTile, setIsDisabled, speed)
    }
}