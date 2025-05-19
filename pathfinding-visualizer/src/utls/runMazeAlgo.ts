import { binaryTree } from "../lib/algo/maze/binaryTree";
import { recursiveDiv } from "../lib/algo/maze/recursiveDiv";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import { constructBorder } from "./constructBorder";
import type { GridType, MazeType, SpeedType, TileType } from "./types";

// Main function to execute selected maze generation algorithm
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
        // Determine the current speed multiplier
        const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2

        // Create the outer border walls of the grid before subdivision
        await constructBorder(grid, startTile, endTile)

        // Begin recursive division on the inner grid
        await recursiveDiv({            
            grid,
            startTile,
            endTile,
            row: 1, // Start one row down from the top to leave the border
            col: 1, // Start one column in from the left to leave the border
            height: Math.floor(MAX_ROWS - 1) / 2, // Inner grid height
            width: Math.floor(MAX_COLS - 1) / 2, // Inner grid width
            setIsDisabled,
            speed
            }
        )

        // Re-enable UI after animation completes (based on speed)
        setTimeout(() => {
            setIsDisabled(false);
        }, 800 * currentSpeed ) // Estimated delay to finish drawing walls
    }
}