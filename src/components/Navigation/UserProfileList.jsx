import * as React from "react";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";

import "./navigation.css";

const listElements = [
  {
    id: "account",
    title: "Account",
    isExit: true,
  },
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "upgrade",
    title: "Upgrade to Premium",
    isExit: true,
  },
  {
    id: "settings",
    title: "Settings",
  },
];

export default function UserProfileList({ lightGrey }) {
  return (
    <div
      className="user-profile"
      style={{
        backgroundColor: lightGrey,
      }}
    >
      {listElements.map((list) => (
        <div key={list.id} className="list-element">
          <span>{list.title}</span>
          {list.isExit && <LogoutIcon />}
        </div>
      ))}
      <Divider sx={{ backgroundColor: "grey" }} />
      <div className="list-element">
        <span>Log out</span>
      </div>
    </div>
  );
}
