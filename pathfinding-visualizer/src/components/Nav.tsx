import { useState, type RefObject } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import { EXTENDED_SLEEP_TIME, MAZE, PATH_ALGO, SLEEP_TIME, SPEEDS } from "../utls/constants";
import { resetGrid } from "../utls/resetGrid";
import type { AlgorithmType, MazeType } from "../utls/types";
import { Select } from "./Select";
import { runMazeAlgo } from "../utls/runMazeAlgo";
import { useSpeed } from "../hooks/useSpeed";
import { PlayButton } from "./PlayButton";
import { runAlgo } from "../utls/runAlgo";
import { animatePath } from "../utls/animatePath";

export function Nav({isVisualizationRunningRef} : {isVisualizationRunningRef: RefObject<boolean>}) {
    const [isDisabled, setIsDisabled] = useState(false);
    const { maze, setMaze, grid, setGrid, isGraphVisualized, setIsGraphVisualized, algorithm, setAlgorithm } = usePathfinding();
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
        setIsGraphVisualized(false);

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

    // Play button Run visualizer
    const handlingRunVisualizer = () => {
        if (isGraphVisualized) {
            setIsGraphVisualized(false);
            resetGrid({grid: grid.slice(), startTile, endTile});
            return true;
        }

        // Run algorithm
        const { traversedTiles, path } = runAlgo({
            algorithm,
            grid,
            startTile,
            endTile
    })

    console.log('Traversed tile', traversedTiles);
    console.log('Path', path);

    animatePath(traversedTiles, path, startTile, endTile, speed)
    setIsDisabled(true);
    isVisualizationRunningRef.current = true;
    setTimeout(() => {
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(true)
        setIsDisabled(false);
        isVisualizationRunningRef.current = false;
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);

    }

    return (
        <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-500 sm:px-5 px-0">
            <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                <h1 className="lg:flex hideen w-[40%] text-2xl pl-1">
                    Pathfinding Visualizer 
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
                    <Select 
                        label="Graph"
                        value={algorithm}
                        options={PATH_ALGO}
                        onChange={(e) => {
                            // Set graphs
                            setAlgorithm(e.target.value as AlgorithmType)
                        }}
                    />

                    <PlayButton 
                    handlingRunVisualizer={handlingRunVisualizer}
                    isDisabled={isDisabled} 
                    isGraphVisualized={isGraphVisualized}                    
                    />
                </div>
            </div>
        </div>
    )
}