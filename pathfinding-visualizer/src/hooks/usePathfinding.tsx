import { useContext } from "react"
import { PathfindingContext } from "../context/PathfindingContext"

export const usePathfinding = () => {
    const context = useContext(PathfindingContext)

    if (context == null) {
        throw new Error("PathfindingContext is contain the usePathfinding")
    }

    return context;
}