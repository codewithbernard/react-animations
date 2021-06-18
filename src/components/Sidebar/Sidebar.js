import React, { useState } from "react";
import cn from "classnames";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuOpen from "@material-ui/icons/MenuOpen";

import beers from "../../assets/beers.png";

import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <aside className={cn({ open })}>
        <div className="content">
          <img className="beers-img" src={beers} alt="beers img" />
          <Typography align="center" variant="h3">
            It works!
          </Typography>
        </div>
      </aside>
      <div className={cn("toggle-button", { open })}>
        <IconButton onClick={toggleOpen}>
          <MenuOpen />
        </IconButton>
      </div>
    </>
  );
};

export default Sidebar;
