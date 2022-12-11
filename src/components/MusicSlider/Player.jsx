import { useState } from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import RepeatIcon from "@mui/icons-material/Repeat";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

import "./music-slider.css";

import bakrPNG from "../../assets/music/bakr.png";
import focusPNG from "../../assets/music/focus.png";
import lofiPNG from "../../assets/music/lofi.png";
import mirasPNG from "../../assets/music/miras.png";
import princePNG from "../../assets/music/prince.png";


import bakrMusic from "../../assets/1.mp3";
import focusMusic from "../../assets/2.mp3";
import lofiMusic from "../../assets/3.mp3";
import mirasMusic from "../../assets/4.mp3";
import princeMusic from "../../assets/5.mp3";

const musicItemsData = [
  {
    id: 0,
    img: bakrPNG,
    title: "Bakr Radio",
    description: "By Spotify",
    music: new Audio(bakrMusic),
  },
  {
    id: 1,
    img: focusPNG,
    title: "Creative Focus",
    description:
      "Get your creative juices flowing with these instrumental masterpieces.",
    music: new Audio(focusMusic),
  },
  {
    id: 2,
    img: lofiPNG,
    title: "lofi beats",
    description:
      "The chillest beats to help you relax, study, code, and focus.",
    music: new Audio(lofiMusic),
  },
  {
    id: 3,
    img: mirasPNG,
    title: "Жугунусов Мирас",
    description: "By Spotify",
    music: new Audio(mirasMusic),
  },
  {
    id: 4,
    img: princePNG,
    title: "V $ X V PRiNCE Radio",
    description: "By Spotify",
    music: new Audio(princeMusic),
  },
];


export const Player = () => {
  const [musicItems, setMusicItems] = useState(musicItemsData.slice(0, 4));
  const [currentMusic, setCurrentMusic] = useState(0);

  const handlePlayMusic = () => {
    // console.log(currentMusic)
    setMusicItems((prevMusicItems) =>
      prevMusicItems.map((item) => {
        if (item.id === currentMusic) {
          return {
            ...item,
            play: item.music.paused ? item.music.play() : item.music.pause(),
          };
        } else return item;
      })
    );
  };

  const handleNextMusic = () => {
    setMusicItems((prevMusicItems) =>
    prevMusicItems.map((item) => {
      if (item.id === currentMusic) {
        return {
          ...item,
          play: item.music.pause(),
        };
      } else return item;
    })
  );
    {currentMusic < 4 ? setCurrentMusic(currentMusic + 1) : setCurrentMusic(0)}
  }

  const handlePreviousMusic = () => {
    setMusicItems((prevMusicItems) =>
    prevMusicItems.map((item) => {
      if (item.id === currentMusic) {
        return {
          ...item,
          play: item.music.pause(),
        };
      } else return item;
    })
  );
    {currentMusic < 4 ? setCurrentMusic(currentMusic - 1) : setCurrentMusic(4)}
  }


  return (
    <div className="player">
      <div className="player-actions">
        <div />
        <div className="player-buttons">
          <ShuffleIcon />
          <Button onClick={handlePreviousMusic}><SkipPreviousIcon /></Button>
          <Button onClick={handlePlayMusic}><PlayCircleFilledWhiteIcon /></Button>
          <Button onClick={handleNextMusic}><SkipNextIcon /></Button>
          <RepeatIcon />
        </div>
        <div />
      </div>
      <div className="player-slider">
        <Slider defaultValue={30} sx={{ color: "white" }} />
      </div>
    </div>
  );
};
