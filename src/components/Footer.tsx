import { globalAssets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="absolute left-0 right-0 bottom-auto h-40 shadow-[0px_0px_8px_black]">
        <div className="max-w-[1280px w-full mx-auto flex justify-center items-center flex-col text-neutral-400">
          <img
            className="aspect-square w-[100px]"
            src={globalAssets.alfaBravoLogo}
            alt="Alfabravo logo"
          />
          <p>©2025 Alfa Bravo Inc.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
