import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="TopBarcontainer">
      <div className="TopBarLeft">
        <span className="logo">FriendConnect</span>
      </div>
      <div className="TopBarCenter">
        <div className="searchBar">
          <SearchIcon />
          <input placeholder="Search " className="searchInput" />
        </div>
      </div>
      <div className="TopBarRight">
        <div className="topBarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <ChatIcon />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <NotificationsActiveIcon />
            <span className="topBarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/person/3.PNG" alt="Im" className="topbarImage" />
      </div>
    </div>
  );
}
