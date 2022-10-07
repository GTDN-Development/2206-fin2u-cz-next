import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import "./MultiRangeSlider.module.css";

interface MultiRangeSliderProps {
  changeData?: any;
  id?: string;
  min: number;
  max: number;
  title: string;
  unit?: string;
}

export default function MultiRangeSlider({
  changeData,
  id,
  min,
  max,
  title,
  unit,
}: MultiRangeSliderProps) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div id={id} className="mx-auto mb-10 flex w-full max-w-lg flex-col">
      <div className="flex flex-row justify-between">
        <p>{title}</p>
        <p>{minValRef.current + " - " + maxValRef.current + " " + unit}</p>
      </div>
      <div className="relative mt-6 flex w-full">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            changeData(id, event.target.value, maxValRef.current);
          }}
          className="thumb z-[3] w-full"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            changeData(id, minValRef.current, event.target.value);
          }}
          className="thumb z-[4] w-full"
        />

        <div className="relative w-full">
          <div className="slider__track absolute z-[1] h-1.5 w-full rounded-sm bg-blue-200"></div>
          <div
            ref={range}
            className="slider__range absolute z-[2] h-1.5 rounded-sm bg-pink-500"
          ></div>
        </div>
      </div>
    </div>
  );
}
