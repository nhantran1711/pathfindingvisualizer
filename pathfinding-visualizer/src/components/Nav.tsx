import { useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import { MAZE } from "../utls/constants";
import { resetGrid } from "../utls/resetGrid";
import type { MazeType } from "../utls/types";
import { Select } from "./Select";
import { runMazeAlgo } from "../utls/runMazeAlgo";
import { useSpeed } from "../hooks/useSpeed";

export function Nav() {
    const [isDisabled, setIsDisabled] = useState(false);
    const { maze, setMaze, grid, setGrid, setIsGraphVisualized } = usePathfinding();
    const { startTile, endTile } = useTile();
    const { speed } = useSpeed();

    const handlingGenerateMaze = (mazeType: MazeType) => {
        if (mazeType === "NONE") {
            // Reset grid
            setMaze(mazeType);
            resetGrid({grid, startTile, endTile});
            return;
        }

        setMaze(mazeType);
        setIsDisabled(true);

        // RUnning maze algo
        runMazeAlgo({
            maze: mazeType,
            grid,
            startTile,
            endTile,
            setIsDisabled,
            speed
        });
        // shallow copy of this grid -> allows any updates to be save
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsDisabled(false) //  maze generation changed the grid -> previouse grapsh visualization is invalid
    }

    return (
        <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-500 sm:px-5 px-0">
            <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                <h1 className="lg:flex hideen w-[40%] text-2xl pl-1">
                    Pathfinding Visualizer Project
                </h1>
                <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-2 sm:py-0 py-4 sm:space-x-5">
                    <Select 
                        label="Maze"
                        value={maze}
                        options={MAZE}
                        onChange={(e) => {
                            // Handling generate mazes
                            handlingGenerateMaze(e.target.value as MazeType);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}