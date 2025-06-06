import { isEqual } from "./helpers";
import type { TileType } from "./types";

export function isQueue(tile: TileType, queue: TileType[]) {
    for (let i = 0; i < queue.length; i ++) {
        if (isEqual(tile, queue[i])) {
            return true;
        }   
    }
    return false;
}