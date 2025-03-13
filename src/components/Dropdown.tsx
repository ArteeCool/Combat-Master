import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const Dropdown = ({ className, title, children }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`w-full max-w-xl ${className || ""}`}>
      <div className="relative bg-neutral-600 w-full rounded-lg overflow-hidden text-neutral-300">
        <button
          className="flex w-full items-center justify-between px-4 py-3 text-left"
          onClick={() => setIsOpened(!isOpened)}
        >
          <span className="font-medium text-lg select-none break-words">
            {title}
          </span>
          <FaPlus
            className={`text-2xl text-neutral-400 transition-transform duration-300 ${
              isOpened ? "-rotate-45" : "rotate-0"
            }`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpened ? "max-h-[2000px] opacity-100" : "max-h-[0px] opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 pb-4 pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
