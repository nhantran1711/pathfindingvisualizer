import type { GridType, SpeedType, TileType } from "../../../utls/types";
import { horizontalDivision } from "./horizontalDiv";
import { verticalDiv } from "./verticalDiv";

export default async function recursiveDiv({
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
  if (height <= 1 || width <= 1) {
    return; // Base case: if the section is too small, stop recursion
  }

  if (height > width) {
    await horizontalDivision({
      // Divide horizontally if height is greater than width
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      setIsDisabled,
      speed,
    });
  } else {
    await verticalDiv({
      // Divide vertically if width is greater than or equal to height
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      setIsDisabled,
      speed,
    });
  }
}