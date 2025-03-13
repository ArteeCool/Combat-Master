import NewsComponent from "../components/NewsComponent";
import { newsAssets } from "../assets/assets";

const News = () => {
  return (
    <>
      <div>
        <NewsComponent
          haveBorder={true}
          title="Promo Kit with hi-res artworks is here!"
          date="Jan 26 2023"
          image={newsAssets.promoKitNews}
          description="Today, we are excited to share our high-res Weapon Cards, Artworks,
          and Logos! This, along with other materials, will help you create even
          better content or perhaps give your favorite items a closer look!"
        />
      </div>
    </>
  );
};
export default News;
