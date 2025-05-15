import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utls/constants";
import { Tile } from "./Tile";

export function Grid() {
    const {grid} = usePathfinding();

    return (
        <div
            className={twMerge(
                // Base classes
                "flex items-center flex-col justify-center border-sky-300",
                // Control grid height
                `lg:min-h-[${MAX_ROWS * 18}px]  md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
                // Control grid width
                `lg:min-h-[${MAX_COLS * 18}px]  md:min-h-[${MAX_COLS * 15}px] xs:min-h-[${MAX_COLS * 8}px] min-h-[${MAX_COLS * 7}px]`
            )}
        >

            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex"> 
                    {row.map((tile, tileIndex) => {
                        const {isStart, isEnd, isPath, isTraversed, isWall} = tile;
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