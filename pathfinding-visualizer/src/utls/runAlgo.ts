import { bfs } from "../lib/algo/bfs";
import { dfs } from "../lib/algo/dfs";
import { dijkstra } from "../lib/algo/dijkstra";
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
            return bfs(grid, startTile, endTile);
        case "DFS":
            return dfs(grid, startTile, endTile);
        // case "A_START":
        //     return;
        case "DIJKSTRA":
            return dijkstra(grid, startTile, endTile);
        default:
            return bfs(grid, startTile, endTile);
    }
}