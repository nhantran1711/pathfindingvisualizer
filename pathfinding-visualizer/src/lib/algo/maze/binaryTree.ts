

// Generate maze using Binary Tree

import { createWall } from "../../../utls/createWall";
import type { GridType, SpeedType, TileType } from "../../../utls/types";

export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) =>  void,
    speed: SpeedType
) => {
    createWall(startTile, endTile, speed)
    await sleep
}