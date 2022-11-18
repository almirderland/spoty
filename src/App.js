import { MusicItems } from "./components/MusicItems";
import { MusicSlider } from "./components/MusicSlider";
import { Navigation } from "./components/Navigation";
import { SideBar } from "./components/SideBar";

import "./App.css";

const secondaryGrey = "#393939";
const lightGrey = "#282828";
const textSubduedGrey = "#a7a7a7";
const secondaryBlack = "#242424";

function App() {
  return (
    <div className="app">
      <div className="top">
        <SideBar textSubduedGrey={textSubduedGrey} />
        <div className="content">
          <Navigation
            secondaryBlack={secondaryBlack}
            secondaryGrey={secondaryGrey}
            lightGrey={lightGrey}
          />
          <MusicItems secondaryGrey={secondaryGrey} />
        </div>
      </div>

      <MusicSlider
        secondaryBlack={secondaryBlack}
        secondaryGrey={secondaryGrey}
      />
    </div>
  );
}

export default App;
