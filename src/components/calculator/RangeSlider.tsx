import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

interface BasicRangeSliderProps {
  changeData?: any;
  id: string;
  min: number;
  max: number;
  skip: number;
  title: string;
  unit?: string;
}

export default function RangeSlider({
  changeData,
  id,
  min,
  max,
  skip,
  title,
  unit,
}: BasicRangeSliderProps) {
  const [value, setValue] = useState(0);

  function setValueAndInputData(e: number) {
    changeData(id, e);
    setValue(e);
  }

  return (
    <div id={id} className="mx-auto mb-10 flex w-full max-w-lg flex-col">
      <div className="flex flex-row justify-between">
        <p>{title}</p>
        <p>{value + " " + unit}</p>
      </div>
      <div className="mt-6 flex w-full justify-between">
        <button
          className="flex items-center justify-center rounded-full bg-primary/10 p-3 text-base text-secondary outline-none transition-colors duration-300 hover:bg-primary/25 focus-visible:ring-4 focus-visible:ring-primary/70"
          onClick={() =>
            value >= min + skip && setValueAndInputData(value - skip)
          }
        >
          <HiMinus />
        </button>
        <div className="relative flex w-4/5 items-center">
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            className="slider h-2 w-full appearance-none rounded-lg bg-body-200 opacity-70 outline-none transition duration-200 hover:opacity-100"
            onChange={(e) => setValueAndInputData(parseInt(e.target.value))}
          />
        </div>
        <button
          className="flex items-center justify-center rounded-full bg-primary/10 p-3 text-base text-secondary outline-none transition-colors duration-300 hover:bg-primary/25 focus-visible:ring-4 focus-visible:ring-primary/70"
          onClick={() =>
            value <= max - skip && setValueAndInputData(value + skip)
          }
        >
          <HiPlus />
        </button>
      </div>
    </div>
  );
}
