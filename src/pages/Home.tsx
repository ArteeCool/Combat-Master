import { homeAssets } from "../assets/assets";
import Description from "../components/Description";
import Hr from "../components/Hr";
import Preview from "../components/Preview";
import Slider from "../components/Slider";
import Trailer from "../components/Trailer";

const Home = () => {
  const images1 = [
    homeAssets.slider1_1,
    homeAssets.slider1_2,
    homeAssets.slider1_3,
    homeAssets.slider1_4,
    homeAssets.slider1_5,
    homeAssets.slider1_6,
    homeAssets.slider1_7,
  ];

  const images2 = [
    homeAssets.slider2_1,
    homeAssets.slider2_2,
    homeAssets.slider2_3,
    homeAssets.slider2_4,
    homeAssets.slider2_5,
    homeAssets.slider2_6,
  ];

  return (
    <>
      <div>
        <Preview />
        <Trailer />
        <Hr />
        <Slider>{images1}</Slider>
        <Hr />
        <Description />
        <Hr />
        <Slider>{images2}</Slider>
      </div>
    </>
  );
};
export default Home;
