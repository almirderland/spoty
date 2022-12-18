import { Link } from "react-router-dom";

import spotifyLogo from "../../assets/spotify_logo.png";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

import "./sidebar.css";
const sideBarItems = [
  {
    id: "home",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    id: "search",
    name: "Search",
    icon: <SearchIcon />,
  },
  {
    id: "library",
    name: "Your library",
    icon: <LibraryBooksIcon />,
  },
  {
    id: "create",
    name: "Create Playlist",
    icon: <AddBoxIcon />,
  },
  {
    id: "liked",
    name: "Liked Songs",
    icon: <FavoriteBorderIcon />,
  },
];
export const SideBar = ({ textSubduedGrey }) => {
  return (
    <div className="side-bar">
      <img className="spotify-logo" src={spotifyLogo} alt="logo" />
      <div
        className="side-bar-body"
        style={{
          color: textSubduedGrey,
        }}
      >
        {sideBarItems.map((item) => (
          <div
            key={item.id}
            className={
              item.id == "create"
                ? "side-bar-item side-bar-item-top"
                : "side-bar-item"
            }
          >
            <div className="side-bar-item-anchor">
              <div className="side-bar-item-icon">{item.icon} </div>
              {item.id === "liked" ? (
                <div>
                  <Link to={item.id}> {item.name}</Link>
                </div>
              ) : (
                <p>{item.name}</p>
              )
              }
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
