import { EXTENDED_TIME_TIME, PATH_TILE_STYLE, SLEEP_TIME, SPEEDS, TRAVERSED_TILE_STYLE } from "./constants";
import { isEqual } from "./helpers";
import type { SpeedType, TileType } from "./types";

export const animatePath = (
    traversedTile: TileType[],
    path: TileType[],
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType
) => {
    for (let i = 0; i < traversedTile.length; i ++ ) {
        setTimeout(() => {
            const tile = traversedTile[i];
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
            }
        }, SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value)
    }

    setTimeout(() => {
        for (let i = 0; i < path.length; i ++ ) {
            setTimeout(() => {
            const tile = traversedTile[i];
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${PATH_TILE_STYLE} animate-path`;
            }
            }, EXTENDED_TIME_TIME * i * SPEEDS.find((s) => s.value === speed)!.value)
        }
    }, SLEEP_TIME * traversedTile.length * SPEEDS.find((s) => s.value === speed)!.value)
}