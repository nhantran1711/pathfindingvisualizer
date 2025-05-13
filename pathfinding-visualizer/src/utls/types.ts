// From the context

export type AlgorithmType = "DIJKSTRA" | "A_START" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIV";

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    parent: TileType | null;
}

export type GridType = TileType[][];