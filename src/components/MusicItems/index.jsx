import { useState } from "react";

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

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";

import "./music-items.css";

const musicItemsData = [
  {
    id: "bakr",
    img: bakrPNG,
    title: "Bakr Radio",
    description: "By Spotify",
    music: new Audio(bakrMusic),
  },
  {
    id: "focus",
    img: focusPNG,
    title: "Creative Focus",
    description:
      "Get your creative juices flowing with these instrumental masterpieces.",
    music: new Audio(focusMusic),
  },
  {
    id: "lofi",
    img: lofiPNG,
    title: "lofi beats",
    description:
      "The chillest beats to help you relax, study, code, and focus.",
    music: new Audio(lofiMusic),
  },
  {
    id: "miras",
    img: mirasPNG,
    title: "Жугунусов Мирас",
    description: "By Spotify",
    music: new Audio(mirasMusic),
  },
  {
    id: "prince",
    img: princePNG,
    title: "V $ X V PRiNCE Radio",
    description: "By Spotify",
    music: new Audio(princeMusic),
  },
];

export const MusicItems = ({ secondaryGrey }) => {
  const [musicItems, setMusicItems] = useState(musicItemsData.slice(0, 4));

  const handleMouseEnter = (id) => {
    setMusicItems((prevMusicItems) =>
      prevMusicItems.map((item) => {
        if (item.id === id) {
          return { ...item, isHovered: true };
        } else return item;
      })
    );
  };

  const handleMouseLeave = (id) => {
    setMusicItems((prevMusicItems) =>
      prevMusicItems.map((item) => {
        if (item.id === id) {
          return { ...item, isHovered: false };
        } else return item;
      })
    );
  };

  const handlePlayMusic = ({ id }) => {
    setMusicItems((prevMusicItems) =>
      prevMusicItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            play: item.music.paused ? item.music.play() : item.music.pause(),
          };
        } else return item;
      })
    );
  };

  return (
    <>
      {musicItemsData.length > 4 && <span>See all</span>}
      <div className="music-items">
        {musicItems.map((musicItem) => (
          <div
            key={musicItem.id}
            className="music-item"
            onMouseEnter={() => handleMouseEnter(musicItem.id)}
            onMouseLeave={() => handleMouseLeave(musicItem.id)}
            style={{
              backgroundColor: musicItem.isHovered ? secondaryGrey : "black",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={musicItem.img}
                alt={musicItem.title}
                className="music-item-image"
              />
              {musicItem.isHovered && (
                <IconButton
                  style={{
                    backgroundColor: "green",
                    color: "black",
                    position: "absolute",
                    bottom: "1rem",
                    right: ".5rem",
                    animation: ".5s slidein 1 alternate",
                  }}
                  onClick={() => handlePlayMusic(musicItem)}
                >
                  <PlayArrowIcon />
                </IconButton>
              )}
            </div>
            <div style={{ display: "grid" }}>
              <span className="music-item-text-main">
                {musicItem.title.length > 16
                  ? musicItem.title.slice(0, 16) + "..."
                  : musicItem.title}
              </span>
              <span className="music-item-text-secondary">
                {musicItem.description.length > 20
                  ? musicItem.description.slice(0, 20) + "..."
                  : musicItem.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
