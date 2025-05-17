import { usePathfinding } from "../hooks/usePathfinding";
import { MAZE } from "../utls/constants";
import { Select } from "./Select";

export function Nav() {

    const maze = usePathfinding();

    return (
        <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-500 sm:px-5 px-0">
            <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                <h1 className="lg:flex hideen w-[40%] text-2xl pl-1">
                    Pathfinding Visualizer Project
                </h1>
                <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-2 sm:py-0 py-4 sm:space-x-5">
                    <Select 
                        label="Maze"
                        value={maze}
                        options={MAZE}
                        
                    />
                </div>
            </div>
        </div>
    )
}