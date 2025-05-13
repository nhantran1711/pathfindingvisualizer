import { useContext } from "react"
import { SpeedContext } from "../context/SpeedContext";


export const useSpeed = () => {
    const context = useContext(SpeedContext);

    if (context == null) {
        throw new Error("SpeedContext should be contained in the SpeedContextProvider")
    }
    return context;
}