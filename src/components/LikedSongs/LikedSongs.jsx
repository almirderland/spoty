import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";

import { MusicSlider } from "../MusicSlider";
import { Navigation } from "../Navigation";
import { SideBar } from "../SideBar";
import "./style.css";

import likeLogo from "../../assets/music/liked.png";

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
    id: "1",
    img: bakrPNG,
    title: "Bakr Radio",
    description: "By Spotify",
    music: new Audio(bakrMusic),
  },
  {
    id: "2",
    img: focusPNG,
    title: "Creative Focus",
    description:
      "Get your creative juices flowing with these instrumental masterpieces.",
    music: new Audio(focusMusic),
  },
  {
    id: "3",
    img: lofiPNG,
    title: "lofi beats",
    description:
      "The chillest beats to help you relax, study, code, and focus.",
    music: new Audio(lofiMusic),
  },
  {
    id: "4",
    img: mirasPNG,
    title: "Жугунусов Мирас",
    description: "By Spotify",
    music: new Audio(mirasMusic),
  },
  {
    id: "5",
    img: princePNG,
    title: "V $ X V PRiNCE Radio",
    description: "By Spotify",
    music: new Audio(princeMusic),
  },
];

const secondaryGrey = "#393939";
const lightGrey = "#282828";
const textSubduedGrey = "#a7a7a7";
const secondaryBlack = "#242424";

function LikedSongs() {
  return (
    <div className="app">
      <div className="liked__top">
        <SideBar textSubduedGrey={textSubduedGrey} />
        <div className="content">
          <Navigation
            secondaryBlack={secondaryBlack}
            secondaryGrey={secondaryGrey}
            lightGrey={lightGrey}
          />
          <div className="liked__main">
            <div className="liked__title">
              <img src={likeLogo} alt="liked" />
              <div className="liked__title__text">
                <h1>Плейлист</h1>
                <h1 id="favorite__songs">Любимые Треки</h1>
                <div className="liked__title__user">
                  <AccountCircleIcon
                    sx={{ color: "grey", marginTop: "7px", marginRight: "5px" }}
                  />
                  <h1>Zhaniya • 5 треков</h1>
                </div>
              </div>
            </div>
            <div>
              <IconButton
                style={{
                  backgroundColor: "#1ed760",
                  color: "black",
                  bottom: "1rem",
                  animation: ".5s slidein 1 alternate",
                  marginTop: "50px",
                }}
              >
                <PlayArrowIcon />
              </IconButton>
            </div>
            <div>
              <table className="liked__table">
                <thead>
                  <tr>
                    <th>
                      <h1>#</h1>
                    </th>
                    <th>
                      <h1>Название</h1>
                    </th>
                    <th>
                      <h1>Альбом</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {musicItemsData.map((row) => {
                    return (
                      <tr>
                        <th>
                          <h1>{row.id}</h1>
                        </th>
                        <th>
                          <div className="table__row">
                            <img
                              src={row.img}
                              className="song__poster"
                              alt={row.description}
                            />
                            <h1>{row.title}</h1>
                          </div>
                        </th>
                        <th>
                          <h1>{row.description}</h1>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <MusicSlider
        secondaryBlack={secondaryBlack}
        secondaryGrey={secondaryGrey}
      />
    </div>
  );
}

export default LikedSongs;
