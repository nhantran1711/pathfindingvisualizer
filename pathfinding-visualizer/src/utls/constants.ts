// Number of Rows and Cols in the Grid

export const MAX_ROWS = 40;
export const MAX_COLS = 50;

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