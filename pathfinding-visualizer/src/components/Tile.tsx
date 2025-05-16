import { twMerge } from "tailwind-merge";
import { BASE_TILE_STYLE, END_TILE_STYLE, MAX_ROWS, PATH_TILE_STYLE, START_TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from "../utls/constants";

// Mouse interface
interface MouseFunction {
    (row: number, col: number): void;
}


export function Tile({
    row,
    col,
    isStart,
    isEnd,
    isTraversed,
    isWall,
    isPath,
    handlingMouseDown,
    handlingMouseUp,
    handlingMouseEnter
}: {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isTraversed: boolean;
    isWall: boolean;
    isPath: boolean;
    handlingMouseDown: MouseFunction;
    handlingMouseUp: MouseFunction;
    handlingMouseEnter: MouseFunction;
}) {
    let tileTileStyle;

    if (isStart == true) {
        tileTileStyle = START_TILE_STYLE;
    } else if (isEnd == true) {
        tileTileStyle = END_TILE_STYLE;
    } else if (isWall) {
        tileTileStyle = WALL_TILE_STYLE;
    } else if (isPath) {
        tileTileStyle = PATH_TILE_STYLE;
    } else if (isTraversed) {
        tileTileStyle = TRAVERSED_TILE_STYLE;
    } else {
        tileTileStyle = BASE_TILE_STYLE;
    }

    // Tailwind Style for border and edge
    const borderStyle = row === MAX_ROWS - 1 ? 'border-b' : col === 0 ? 'border-l' : '';
    const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? 'border-l' : '';


    return (
        <div
          className={twMerge(tileTileStyle, borderStyle, edgeStyle)}
          id={`${row}-${col}`}
          onMouseDown={() => {
            console.log("MouseDown on", row, col);
            handlingMouseDown(row, col);
          }}
          onMouseUp={() => {
            console.log("MouseUp on", row, col);
            handlingMouseUp(row, col);
          }}
          onMouseEnter={() => {
            // console.log("MouseEnter on", row, col);
            handlingMouseEnter(row, col);
          }}
        />
      );
}