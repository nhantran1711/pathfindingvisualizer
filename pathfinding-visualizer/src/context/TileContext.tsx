import { createContext, useState, type ReactNode } from "react";
import type { TileType } from "../utls/types";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utls/constants";

interface TileContextInterface {
    startTile: TileType,
    setStartTile: (startTile: TileType) =>  void,
    endTile: TileType,
    setEndTile: (endTile: TileType) => void,
}


export const TileContext =  createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({children}: {children: ReactNode}) => {
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIG);
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIG);

    return (
        <TileContext.Provider
        value={{
            startTile,
            setStartTile,
            endTile,
            setEndTile
        }}>
            {children}
        </TileContext.Provider>
    )
}