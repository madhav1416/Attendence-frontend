import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";

import "../css/SideNavbar.css";
import { Button } from "@material-ui/core";
function SideNavbar() {
  return (
    <div className="navbar">
      <div className="nav-button">
        <div className="home">
          <HomeIcon fontSize="medium" className="icon" />
          <h5 className="text">Home</h5>
        </div>
        <div className="home">
          <NotificationsActiveIcon fontSize="medium" className="icon" />
          <h5 className="text">Notifications</h5>
          <Badge
            badgeContent={1}
            color="error"
            style={{ marginLeft: "30px" }}
          />
        </div>
        <div className="home">
          <EmailIcon fontSize="medium" className="icon" />
          <h5 className="text">Messages</h5>
        </div>
      </div>
    </div>
  );
}
export default SideNavbar;