import { MdClose } from "react-icons/md";
import Navbar from "./Navbar";

interface Props {
  className: string;
  toggleFunction: () => void;
}

const Menu = ({ className, toggleFunction }: Props) => {
  return (
    <>
      <div
        className={`${className} fixed top-0 right-0 bottom-0 bg-neutral-800 overflow-hidden duration-300 z-50`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <MdClose
            onClick={() => toggleFunction()}
            className="absolute top-7 right-7 text-4xl select-none"
          />
          <Navbar className="flex-col text-center text-3xl" />
        </div>
      </div>
    </>
  );
};
export default Menu;
