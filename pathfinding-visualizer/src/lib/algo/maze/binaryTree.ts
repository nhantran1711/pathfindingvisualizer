

// Generate maze using Binary Tree

import type { GridType, SpeedType, TileType } from "../../../utls/types";

export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) =>  void,
    speed: SpeedType
) => {
    createWall()
}