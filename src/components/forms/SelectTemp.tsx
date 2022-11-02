import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

type SelectOptions = {
  as?: React.ElementType;
  title?: string;
  id: string;
  className?: string;
  values: string[];
  changeData?: any;
  [x: string]: any;
};

export default function SelectTemp({
  as: Tag = "div",
  title,
  id,
  values,
  className = "",
  changeData,
  ...rest
}: SelectOptions) {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValueAndInputData(values[0]);
  }, []);

  function setValueAndInputData(e: string) {
    changeData !== undefined && changeData(id, e);
    setValue(e);
  }

  return (
    <Tag className={`${className}`}>
      <div className="flex flex-row justify-between">
        <label
          htmlFor={id}
          className="text-lg font-semibold leading-tight text-rich"
        >
          {title}
        </label>
      </div>
      <div className="relative">
        <HiChevronDown className="absolute right-4 top-1/2 text-2xl" />
        <select
          id={id}
          name={id}
          onChange={(e) => setValueAndInputData(e.target.value)}
          className="z-50 mt-6 w-full rounded-md border border-body-100 bg-body-100 px-4 py-3 text-rich/80 transition duration-150 focus-visible:ring-4 focus-visible:ring-primary/70"
          {...rest}
        >
          {values.map((value: string, key: number) => (
            <option className="my-5 bg-white py-1" key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </Tag>
  );
}
