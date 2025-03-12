import { assets } from "../assets/assets";
import Description from "../components/Description";
import Hr from "../components/Hr";
import Preview from "../components/Preview";
import PreviewUpdates from "../components/PreviewUpdates";
import Slider from "../components/Slider";
import Trailer from "../components/Trailer";

const Home = () => {
  const images = {
    slider1_1: assets.slider1_1,
    slider1_2: assets.slider1_2,
    slider1_3: assets.slider1_3,
    slider1_4: assets.slider1_4,
    slider1_5: assets.slider1_5,
    slider1_6: assets.slider1_6,
    slider1_7: assets.slider1_7,
  };

  const images2 = {
    slider2_1: assets.slider2_1,
    slider2_2: assets.slider2_2,
    slider2_3: assets.slider2_3,
    slider2_4: assets.slider2_4,
    slider2_5: assets.slider2_5,
    slider2_6: assets.slider2_6,
  };

  return (
    <>
      <div>
        <Preview />
        <Trailer />
        <Hr />
        <Slider>{images}</Slider>
        <Hr />
        <Description />
        <Hr />
        <Slider>{images2}</Slider>
        <Hr />
        <PreviewUpdates />
        <Hr />
      </div>
    </>
  );
};
export default Home;
