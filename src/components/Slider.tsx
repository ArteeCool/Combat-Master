import { useRef } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

interface Props {
  children: Array<string>;
}

const Slider = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative w-full max-w-[800px] mx-auto">
        <button
          className="absolute bg-neutral-700/75 text-white top-1/2 -left-4 w-8 h-8 rounded-full -translate-y-1/2 z-10 flex items-center justify-center text-lg"
          onClick={() => scroll("left")}
        >
          <FaLessThan />
        </button>
        <div
          ref={scrollRef}
          className="w-full mx-auto flex overflow-x-auto no-scrollbar snap-mandatory snap-x"
        >
          {children.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-full max-w-[400px]"
            >
              <img
                className="w-full h-auto object-cover"
                src={src}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute bg-neutral-700/75 text-white top-1/2 -right-4 w-8 h-8 rounded-full -translate-y-1/2 z-10 flex items-center justify-center text-lg"
          onClick={() => scroll("right")}
        >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default Slider;
