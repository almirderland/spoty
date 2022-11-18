import { Player } from "./Player";
import "./music-slider.css";

export const MusicSlider = ({ secondaryBlack, secondaryGrey }) => {
  return (
    <div
      className="music-slider"
      style={{
        background: secondaryBlack,
        borderTop: `1px solid ${secondaryGrey}`,
      }}
    >
      <div />
      <Player />
      <div />
    </div>
  );
};
