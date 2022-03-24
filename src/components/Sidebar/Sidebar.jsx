import React from "react";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpIcon from "@mui/icons-material/Help";

export default function Sidebar() {
  return (
    <div className="SideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeedIcon color="primary" className="sideicon" />
            <span className="sideText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <BookmarksIcon color="primary" className="sideicon" />
            <span className="sideText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <ChatIcon color="primary" className="sideicon" />
            <span className="sideText">Chat</span>
          </li>
          <li className="sideBarListItem">
            <GroupsIcon className="sideicon" />
            <span className="sideText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <EmojiEventsIcon className="sideicon" />
            <span className="sideText">Events</span>
          </li>
          <li className="sideBarListItem">
            <HelpIcon className="sideicon" />
            <span className="sideText">Help</span>
          </li>
        </ul>

        <button className="sideBarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/2.PNG" alt="" />
            <span className="sidebarFriendname">Frankie</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/9.PNG" alt="" />
            <span className="sidebarFriendname">Ramos</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/1.PNG" alt="" />
            <span className="sidebarFriendname">Ronaldo</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/4.PNG" alt="" />
            <span className="sidebarFriendname">Kimmich</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/5.PNG" alt="" />
            <span className="sidebarFriendname">Marcelo</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/6.PNG" alt="" />
            <span className="sidebarFriendname">Neymar</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/10.PNG" alt="" />
            <span className="sidebarFriendname">Arnold</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/8.PNG" alt="" />
            <span className="sidebarFriendname">Neuer</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/11.PNG" alt="" />
            <span className="sidebarFriendname">Vergil</span>
          </li>
          <li className="sideBarFriend">
            <img className="sidebarImage" src="/assets/person/12.jpeg" alt="" />
            <span className="sidebarFriendname">Messi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
