import NewsComponent from "../components/NewsComponent";
import { updatesAssets } from "../assets/assets";
import Hr from "../components/Hr";

const Updates = () => {
  return (
    <>
      <div className="w-full min-h-[90vh]">
        <NewsComponent
          title="Halloween Specials and more!"
          date="Oct 19 2024 • v24.330 • Halloween"
          image={updatesAssets.halloween_1}
          description="Gear up for the spookiest update yet! Vaporize enemies with the Rail Gun, dominate the new Fight Yard mode. Wield the fearsome Akimbo Axes and unleash the Pumpkin Triplets—Aberration, John O. Lantern, and Pincushion! Use the new Collections feature, and get ready for more as Halloween Part 2 approaches! Happy Haunting!"
        />
        <Hr />
        <NewsComponent
          title="Unleash the Power of the Rail Gun!"
          date=""
          image={updatesAssets.rail_gun_1}
          description="Bring the heat with the all-new Rail Gun! Harness high-powered precision to obliterate enemies in one unique devastating Atomic Rail Tracer shot. Ready. Aim. Vaporize!"
        />
        <Hr />
        <NewsComponent
          title="Dominate the Fight Arena!"
          date=""
          image={updatesAssets.fight_arena_1}
          description="Enter the Fight Yard, special Halloween Game Mode! Battle in the new fast-paced, all-out arena where only the strongest survive. Grab the best blueprint weapons, fly the jump-pads, teleport and fight for supremacy! Capture the Rail Gun spot and show your art of being supreme!"
        >
          <img
            className="w-30 mx-auto pt-10"
            src={updatesAssets.fight_arena_2}
            alt=""
          />
        </NewsComponent>
        <Hr />
        <NewsComponent
          title="Haunt the Skies with the New Map!"
          image={updatesAssets.haunt_the_skies_1}
          description="Welcome to Heavens, the ultimate battleground in the sky! Fight on floating platforms with high-altitude combat and fierce aerial maneuvers. Only the bold survive in this heavenly chaos!"
        >
          <div className="w-full">
            <div className="mx-auto flex flex-col gap-4">
              <img src={updatesAssets.haunt_the_skies_2} alt="" />
              <p>
                Use the new Teleports, Heavy Armor, Jump-pads and the Best
                Weapon Blueprints including the new Rail Gun -- all in one
                place! Rise to skies!
              </p>
              <img src={updatesAssets.haunt_the_skies_3} alt="" />
              <p>
                Activate the 24/7 Heavens Fight Yard filter and vaporize your
                enemies in the sky-high chaos of this Heavenly Arena!
              </p>
            </div>
          </div>
        </NewsComponent>
        <Hr />
        <NewsComponent
          title="Twice the Terror with Akimbo Axes!"
          image={updatesAssets.akimbo_1}
          description="Unleash double the destruction with Akimbo Axes! Dual-wield devastating melee power and slice through the competition with twice the style! Why stop at one? Go ahead and give it a whirl with every Axe in the game — because two is always better than one!"
        />
        <img className="w-full h-[30$]" src={updatesAssets.akimbo_2} alt="" />
      </div>
    </>
  );
};
export default Updates;
