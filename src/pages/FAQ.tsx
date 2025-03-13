import { faqAssets } from "../assets/assets";
import Dropdown from "../components/Dropdown";

const FAQ = () => {
  return (
    <>
      <div className="w-full mt-[100px] flex flex-col gap-10">
        <div className="mx-auto w-fit flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-neutral-400">COMBATZONE</h1>
            <Dropdown title="Battle Royale in Combat Master, when?">
              <img src={faqAssets.combatZone} alt="" />
              <h1>soon 'D</h1>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-neutral-400">General</h1>
            <Dropdown title="Is game online or offline?">
              <h1>
                Combat Master is an online game. The offline mode is also
                available: simply switch off your connection and, and you'll be
                hosting matches on your device and play against AI.
              </h1>
            </Dropdown>
            <Dropdown title="I want game localized in my language, can I help with this?">
              <h1>
                Sure! That would be absolutely amazing! Please write to
                alfabravogames+local@gmail.com for details.
              </h1>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-neutral-400">General</h1>
            <Dropdown title="Some gamepad buttons are not working or mapped wierd, what should I do?">
              <div>
                There are variety of Android devices with different
                interpretation of inputs, therefore some of them "see" your
                gamepad buttons differently.
                <br />
                <br />
                To fix this: search Play Store and install any "gamepad button
                mapper" app and map/calibrate your gamepad manually.
                <br />
                <br />
                Please note:
                <br />
                <em>
                  CM fully supports PS4 controllers on Android devices running
                  Android 10 or higher. <br />
                  CM fully supports PS5 controllers on Android devices running
                  Android 12 or higher.
                </em>
                <br />
                <br />
                The Combat Master in-game gamepad calibration and mapping for
                older devices and unique gamepads is coming in next versions.
              </div>
            </Dropdown>
            <Dropdown title="Is there a gyroscope in the game?">
              <div>
                Yes! Go to <span className="font-semibold">Options</span> and
                you will find it under the{" "}
                <span className="font-semibold">Controls</span> tab. You can
                have it:
                <br />• Off
                <br />• Always On
                <br />• On Only on Aim
                <br />
              </div>
            </Dropdown>
            <Dropdown title="Can I customize controls?">
              <img className="mb-4" src={faqAssets.button_controls} alt="" />
              <p>
                Yes! Go to <b>Options</b> and you will find the{" "}
                <b>Customize Buttons</b> under the <b>Controls</b> Tab. Set up
                buttons and user interface elements position, size, transparency
                and color to your best liking!
              </p>
            </Dropdown>
            <Dropdown title="How ping works in custom games?">
              <div>
                When you start a<strong> Custom Game</strong>, your device
                creates<strong> a local server game room</strong> for other
                players to connect. This means that everyone on your local
                server rely on your internet connection and relative position to
                you in the world that forms the ping numbers.
              </div>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-neutral-400">
              Profile, Progress and Purchases
            </h1>
            <Dropdown title="How to save my progress?">
              <img className="mb-4" src={faqAssets.save_progress} alt="" />
              <div>
                Combat Master <strong>automatically</strong> saves your progress
                to Cloud after every match and every 1 hour.
                <br />
                <br />
                Sometimes you'd like to save and load manually. For instance
                when you switch between your devices or platforms to play with
                your latest progress. To do so:
                <br />
                <br />
                Go to <strong>Options</strong> and select{" "}
                <strong>Account</strong> tab.
                <br />
                Use <strong>Save to Cloud</strong> to instantly save your
                progress on the Cloud.
                <br />
                Use <strong>Load from Cloud</strong> to load your progress from
                the Cloud to your local device.
              </div>
            </Dropdown>
            <Dropdown title="How to delete my personal data?">
              <img className="mb-4" src={faqAssets.delete_account} alt="" />
              <div>
                You may delete your Personal Data following these steps:
                <br />
                <strong>
                  <br />
                  *** Please note: all your in-game progress will be deleted
                  permanently, and could <br />
                  never be restored ***
                </strong>{" "}
                <br />
                <br /> 1. Go to game Options section. <br />
                2. Tap Delete Player button.
                <br />
                3. In the 'Delete Player' popup, tap "Delete Profile" confirm
                button. Done!
                <br />
              </div>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-neutral-400">Community</h1>
            <Dropdown title="How to join the Combat Master Community?">
              <img src={faqAssets.discord} alt="" />
              <div>
                Combat Master Discord community is now almost{" "}
                <strong>100 000</strong> first person shooter enthusiasts around
                the world and we'd be so happy to see you join!
                <br />
                <br />
                Go to <strong>Options</strong> and tap <strong>J</strong>
                <strong>oin the community</strong> to get to Combat Master
                Discord server.
              </div>
            </Dropdown>
            <Dropdown title="How do I feature my video in CM Hub's Videos tab?">
              <img src={faqAssets.discord} alt="" />
              <div>
                The CM Hub's Videos playlists are automatically generated by
                smart YouTube algorithms. <br />
                <br />
                <b>
                  *** The Partner content creators videos tab is coming soon.
                  ***
                </b>
              </div>
            </Dropdown>
          </div>
          <div className="mt-16">
            <Dropdown title="Nothing helped?">
              <p>
                Please email us at alfabravogames@gmail.com and we'll be happy
                to help!
              </p>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;
