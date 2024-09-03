import { useEffect, useState } from "react";

const Checkbox = ({
  title,
  subtitle,
  price,
  toggleHandler,
}: {
  title: string;
  subtitle: string;
  price: string;
  toggleHandler: (isChecked: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    toggleHandler(isChecked);
  }, [isChecked]);

  return (
    <div
      className={`rounded-md border ${
        isChecked ? "border-fem-purplish-blue bg-fem-magnolia" : ""
      } `}
    >
      <label
        htmlFor={title}
        className="flex cursor-pointer items-center space-x-4 py-2 px-4"
      >
        <input
          className=" h-5 w-5 cursor-pointer rounded-sm border-fem-light-gray text-fem-purplish-blue focus:ring-0"
          type="checkbox"
          id={title}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        />
        <div className="flex w-full select-none items-center justify-between">
          <div className="">
            <span className="block font-bold text-fem-marine-blue">
              {title}
            </span>
            <span className="block text-sm text-fem-cool-gray">{subtitle}</span>
          </div>
          <span className="text-sm font-semibold text-fem-pastel-blue">
            {price}
          </span>
        </div>
      </label>
    </div>
  );
};
export default Checkbox;
