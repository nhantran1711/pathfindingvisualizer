import type { MouseEventHandler } from "react";
import { GrPowerReset } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";

export function PlayButton({
    handlingRunVisualizer,
    isDisabled,
    isGraphVisualized
}: {
    handlingRunVisualizer: MouseEventHandler<HTMLButtonElement>;
    isDisabled: boolean;
    isGraphVisualized: boolean;
}) {
    return (
        <button
            disabled={isDisabled}
            onClick={handlingRunVisualizer}
            className="disabled:pointer-events-none disabled:opacity-20 transition ease-out rounded-full p-2.5 shadow-md bg-green-300 hover:bg-green-500 border-none active:ring-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-20"
        >
            {isGraphVisualized ? (
                <GrPowerReset className="w-5 h-5" />
            ) : (
                <BsFillPlayFill className="w-5 h-5" />
            )}
        </button>
    );
}
