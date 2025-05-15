import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utls/constants";
import { Tile } from "./Tile";

export function Grid() {
    const {grid} = usePathfinding();
    console.log('Grid inside Grid component:', grid);

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

            {grid.map((row, rowIndex) => (
                
                <div key={rowIndex} className="flex"> 
                    {row.map((tile, tileIndex) => {
                        const {isStart, isEnd, isPath, isTraversed, isWall} = tile;
                        console.log(`Tile at row:${tile.row}, col:${tile.col}, isStart: ${isStart}`);
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
                            />
                            
                        )
                        
                    }
                )}
                </div>
            ))}
        </div>
    )
}