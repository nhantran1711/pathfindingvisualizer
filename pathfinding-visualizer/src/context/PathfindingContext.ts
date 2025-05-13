// Shape of the Context value
import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { AlgorithmType, GridType, MazeType } from "../utls/types";

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
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [grid, GridType] = useState<GridType>([])
}