// From the context

export type AlgorithmType = "DIJKSTRA" | "A_START" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIV";
export interface MazeSelectType {
    name: string;
    value: MazeType;
}

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isTraversed: boolean;
    isPath: boolean;
    distance: number;
    parent: TileType | null;
}

export type GridType = TileType[][];


export type SpeedType = 3 | 2 | 0.5;
export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}