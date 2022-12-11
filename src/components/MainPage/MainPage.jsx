import React from 'react';
import { MusicItems } from '../MusicItems';
import { MusicSlider } from '../MusicSlider';
import { Navigation } from '../Navigation';
import { SideBar } from '../SideBar';
import "./MainPage.css";


const secondaryGrey = "#393939";
const lightGrey = "#282828";
const textSubduedGrey = "#a7a7a7";
const secondaryBlack = "#242424";



function MainPage () {
  
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

export default MainPage;