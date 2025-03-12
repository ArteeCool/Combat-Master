import { assets } from "../assets/assets";
import UpdateCard from "./UpdateCard";

const PreviewUpdates = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly p-10 w-full max-w-[1000px] gap-6">
        <UpdateCard
          image={assets.release1}
          title="Laser Strike"
          date="September 25"
          link="#"
        />
        <UpdateCard
          image={assets.release2}
          title="Capture the Flag!"
          date="August 24"
          link="#"
        />
        <UpdateCard
          image={assets.release3}
          title="Season 2"
          date="August 2"
          link="#"
        />
      </div>
    </div>
  );
};

export default PreviewUpdates;
