import { homeAssets } from "../assets/assets";
import UpdateCard from "./ReleaseCard";

const ReleaseHistory = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1000px] flex flex-col items-center">
        <div>
          <h1 className="text-3xl text-neutral-400">Release History 2024</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly p-10 gap-6">
          <UpdateCard
            image={homeAssets.release1}
            title="Laser Strike"
            date="September 25"
            link="#"
          />
          <UpdateCard
            image={homeAssets.release2}
            title="Capture the Flag!"
            date="August 24"
            link="#"
          />
          <UpdateCard
            image={homeAssets.release3}
            title="Season 2"
            date="August 2"
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default ReleaseHistory;
