import { SPEEDS, WALL_TILE_STYLE } from "../../../utls/constants";
import { getRandInt, isEqual, sleep } from "../../../utls/helpers";
import type { GridType, SpeedType, TileType } from "../../../utls/types";
import recursiveDiv from "./recursiveDiv";


export async function verticalDiv({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  setIsDisabled,
  speed,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  setIsDisabled: (disabled: boolean) => void;
  speed: SpeedType;
}) {
  const makeWallAt = col + getRandInt(0, width - 1) * 2 + 1; // Determine the column to place the wall
  const makePassageAt = row + getRandInt(0, height) * 2; // Determine the row to leave a passage

  for (let i = 0; i < 2 * height - 1; i += 1) {
    // Create the vertical wall
    if (makePassageAt !== row + i) {
      if (
        !isEqual(grid[row + i][makeWallAt], startTile) && // Check if the current tile is not the start tile
        !isEqual(grid[row + i][makeWallAt], endTile) // Check if the current tile is not the end tile
      ) {
        grid[row + i][makeWallAt].isWall = true; // Set the current tile as a wall

        document.getElementById(
          `${row + i}-${makeWallAt}`
        )!.className = `${WALL_TILE_STYLE} animate-wall`; // Add wall style and animation
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5); // Wait for animation
      }
    }
  }

  // Recursively divide the sections to the left and right of the wall
  await recursiveDiv({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width: (makeWallAt - col + 1) / 2,
    setIsDisabled,
    speed,
  });
  await recursiveDiv({
    grid,
    startTile,
    endTile,
    row,
    col: makeWallAt + 1,
    height,
    width: width - (makeWallAt - col + 1) / 2,
    setIsDisabled,
    speed,
  });
}
