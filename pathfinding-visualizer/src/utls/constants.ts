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


// Base Tailwind Style for Tile
export const BASE_TILE_STYLE = "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";

// Motion Style for Tile
export const TRAVERSED_TILE_STYLE = BASE_TILE_STYLE + " bg-cyan-400";
export const START_TILE_STYLE = BASE_TILE_STYLE + " bg-green-400";
export const END_TILE_STYLE = BASE_TILE_STYLE + " bg-red-400";
export const WALL_TILE_STYLE = BASE_TILE_STYLE + " bg-grey-400";
export const PATH_TILE_STYLE = BASE_TILE_STYLE + " bg-green-500";


