import type { AlgorithmType, GridType, TileType } from "./types";

export const runAlgo = ({
    algorithm,
    grid,
    startTile,
    endTile
} : {
    algorithm: AlgorithmType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType
}) => {
    // switch cases for running algorithms
    switch(algorithm) {
        case "BFS":
            return null;
        case "DFS":
            return null;
        case "A_START":
            return null;
        case "DIJKSTRA":
        return null;
    }
}