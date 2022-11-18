import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import UserProfileList from "./UserProfileList";

import "./navigation.css";

export const Navigation = ({ secondaryBlack, secondaryGrey, lightGrey }) => {
  const [isUserHovered, setUserHovered] = useState(false);
  const [isModalOpened, setModalOpened] = useState(false);

  const handleMouseEnter = () => {
    setUserHovered(true);
  };

  const handleMouseLeave = () => {
    setUserHovered(false);
  };

  const handleOpenUserModal = () => {
    setModalOpened((prevOpened) => !prevOpened);
  };

  return (
    <div className="navigation">
      <div className="nav-arrows">
        <IconButton
          style={{
            backgroundColor: secondaryBlack,
            color: "grey",
            marginRight: "1rem",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton style={{ backgroundColor: secondaryBlack, color: "grey" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div className="nav-buttons">
        <button
          className="nav-upgrade"
          style={{
            border: `2px solid ${secondaryGrey}`,
          }}
        >
          Upgrade
        </button>
        <div style={{ position: "relative" }}>
          <button
            className="nav-user-profile"
            style={{
              background: isUserHovered ? secondaryBlack : "black",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOpenUserModal}
          >
            <AccountCircleIcon sx={{ color: "grey" }} />
            <span>Almira and Zhaniya</span>
            {isModalOpened ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </button>

          {isModalOpened && (
            <div className="nav-modal" style={{ zIndex: 3 }}>
              <UserProfileList lightGrey={lightGrey} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
