import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utls/constants";
import { Tile } from "./Tile";
import { useState, type RefObject } from "react";
import { checkIsStartOrEnd, createNewGrid } from "../utls/helpers";

export function Grid({isVisualizationRunningRef} : {isVisualizationRunningRef: RefObject<boolean>}) {
    const {grid, setGrid} = usePathfinding();
    console.log('Grid inside Grid component:', grid);

    // Pressed down set up for drawling wall fun
    const [ isMouseDown, setIsMouseDown] = useState(false);

    // Handling function pressing down 
    const handlingMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) {
            return;
        }
        // Set true
        setIsMouseDown(true);

        // Create new grid
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);

        // console.log("Before:", grid[row][col].isWall);
        // console.log("After:", newGrid[row][col].isWall);
    }

    // Handling mouse up
    const handlingMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) {
            return;
        }
        // Set true
        setIsMouseDown(false);
    }

    // Handling mouse enter
    const handlingMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) {
            return;
        }
        
        if (isMouseDown == true) {
            // Create new grid
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    }



    return (
        <div
            className={twMerge(
                // Base classes
                "flex items-center flex-col justify-center border-sky-300",
                // Control grid height
                `lg:min-h-[${MAX_ROWS * 18}px]  md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
                // Control grid width
                `lg:min-w-[${MAX_COLS * 18}px]  md:min-w-[${MAX_COLS * 15}px] xs:min-w-[${MAX_COLS * 8}px] min-w-[${MAX_COLS * 7}px]`
            )}
        >

            {grid.map((r, rowIndex) => (
                
                <div key={rowIndex} className="flex"> 
                    {r.map((tile, tileIndex) => {
                        const {row, col, isStart, isEnd, isPath, isTraversed, isWall} = tile;
                        // console.log(`Tile at row:${tile.row}, col:${tile.col}, isStart: ${isStart}`);
                        return (
                            <Tile 
                                key = {tileIndex}
                                row = {tile.row}
                                col = {tile.col}
                                isStart = {isStart}
                                isEnd = {isEnd}
                                isWall = {isWall}
                                isPath = {isPath}
                                isTraversed = {isTraversed}
                                handlingMouseDown = {() => handlingMouseDown(row, col)}
                                handlingMouseUp = {() => handlingMouseUp(row, col)}
                                handlingMouseEnter = {() => handlingMouseEnter(row, col)}
                            />
                            
                        )
                        
                    }
                )}
                </div>
            ))}
        </div>
    )
}