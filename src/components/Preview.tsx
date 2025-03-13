import { globalAssets, homeAssets } from "../assets/assets";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Preview = () => {
  return (
    <div className="w-full min-h-[75vh] pb-20">
      <div className="inset-0 w-full h-[500px] relative">
        <video
          className="select-none pointer-events-none object-cover w-full h-full blur-xs brightness-25"
          src={homeAssets.previewVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center gap-4">
          <img
            src={globalAssets.CombatMaster}
            className="w-[300px] object-cover"
          />
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://store.steampowered.com/app/2281730/Combat_Master_Season_3/"
              className="w-[150px] sm:w-[250px]"
            >
              <img
                className="w-full object-contain"
                src={homeAssets.downloadSteam}
                alt="Steam download button"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/combat-master-mobile/id1598639131"
              className="w-[150px] sm:w-[250px]"
            >
              <img
                className="w-full object-contain"
                src={homeAssets.downloadAppStore}
                alt="App store download button"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.AlfaBravo.CombatMaster"
              className="w-[150px] sm:w-[250px]"
            >
              <img
                className="w-full object-contain"
                src={homeAssets.downloadGooglePlay}
                alt="Google play download button"
              />
            </a>
          </div>
        </div>
        <div className=" m-10 flex sm:flex-row justify-center text-3xl gap-10 text-gray-300">
          <a href="https://discord.com/invite/vJ7qMPDsr5">
            <FaDiscord className="hover:-translate-y-0.5 duration-200" />
          </a>
          <a href="https://x.com/AlfaBravoInc">
            <FaSquareXTwitter className="hover:-translate-y-0.5 duration-200" />
          </a>
          <a href="https://www.instagram.com/alfabravoinc/">
            <FaInstagram className="hover:-translate-y-0.5 duration-200" />
          </a>
          <a href="https://www.youtube.com/@alfabravoinc">
            <FaYoutube className="hover:-translate-y-0.5 duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Preview;
