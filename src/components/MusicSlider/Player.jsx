import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import RepeatIcon from "@mui/icons-material/Repeat";
import Slider from "@mui/material/Slider";

import "./music-slider.css";

export const Player = () => {
  return (
    <div className="player">
      <div className="player-actions">
        <div />
        <div className="player-buttons">
          <ShuffleIcon />
          <SkipPreviousIcon />
          <PlayCircleFilledWhiteIcon />
          <SkipNextIcon />
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
