import { BASE_TILE_STYLE, SPEEDS } from "./constants";
import { sleep } from "./helpers";
import type { GridType, SpeedType } from "./types";

// Remove the tile and pause while updating the TileStyle on the specified tile
export const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: SpeedType
) => {
  let targetRow = row;
  let targetCol = col;

  if (isRight && grid[row][col + 1]) {
    targetCol = col + 1;
  } else if (grid[row + 1]) {
    targetRow = row + 1;
  }

  grid[targetRow][targetCol].isWall = false;
  const tileElement = document.getElementById(`${targetRow}-${targetCol}`);
  if (tileElement) {
    tileElement.classList = BASE_TILE_STYLE;
  }
  

  const delay = 20 * SPEEDS.find((s) => s.value === speed)!.value - 5;
  await sleep(delay);
};
