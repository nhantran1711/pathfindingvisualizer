// Number of Rows and Cols in the Grid

import type { AlgoSelectType, MazeSelectType, SpeedSelectType} from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

//  Shape of the first tile
export const  START_TILE_CONFIG = {
    row: 1,
    col: 1,
    isEnd: false,
    isStart: false,
    isWall: false,
    isPath: false,
    distance: 0,
    isTraversed: false,
    parent: null
}

//  Shape of the last tile
export const  END_TILE_CONFIG = {
    row: MAX_ROWS - 2,
    col: MAX_COLS - 2,
    isEnd: false,
    isStart: false,
    isWall: false,
    isPath: false,
    distance: 0,
    isTraversed: false,
    parent: null
}


// Base Tailwind Style for Tile
export const BASE_TILE_STYLE = "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";

// Motion Style for Tile
export const TRAVERSED_TILE_STYLE = BASE_TILE_STYLE + " bg-cyan-400";
export const START_TILE_STYLE = BASE_TILE_STYLE + " bg-green-400";
export const END_TILE_STYLE = BASE_TILE_STYLE + " bg-red-400";
export const WALL_TILE_STYLE = BASE_TILE_STYLE + " bg-gray-400";
export const PATH_TILE_STYLE = BASE_TILE_STYLE + " bg-green-500";


// Maze constant
export const MAZE: MazeSelectType[] = [
    {name: "Custom", value: "NONE"},
    {name: "Binary Tree", value: "BINARY_TREE"},
    {name: "Recursive Division", value: "RECURSIVE_DIV"}
]

export const SPEEDS: SpeedSelectType[] = [
    {name: "Slow", value: 3},
    {name: "Normal", value: 2},
    {name: "Fast", value: 0.5}
]

// SLEEP CONSTANTS
export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;

// Alogrithm graph
export const PATH_ALGO: AlgoSelectType[] = [
    {name: "Dijkstra", value: "DIJKSTRA"},
    {name: "A-Star", value: "A_STAR"},
    {name: "BFS", value: "BFS"},
    {name: "DFS", value: "DFS"}
]