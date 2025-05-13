// Shape of the Context value
import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { AlgorithmType, GridType, MazeType } from "../utls/types";
import { createGrid } from "../utls/helpers";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utls/constants";

interface PathfindingContextInterface {
    // define algorithm
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;

    // define maze
    maze: MazeType;
    setMaze: (maze: MazeType) => void;

    // define grid
    grid: GridType;
    setGrid: (grid: GridType) => void;

    // define graph
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}


export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

// Define set up
export const PathfindingProvider = ({children} : {children: ReactNode}) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS"); // Set BFS to start
    const [maze, setMaze] = useState<MazeType>("NONE"); // Maze not create yet
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIG, END_TILE_CONFIG)); // create shape of the grid
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false); // Set this false

    return (
        <PathfindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized
            }}
        >{children}</PathfindingContext.Provider>
    )
}
