import { useContext } from "react"
import { TileContext } from "../context/TileContext"


export const useTile = () => {
    const context = useContext(TileContext);

    if (context == null) {
        throw new Error("Tilecontext should be contained in the TileProvider")
    }
    return context;
}