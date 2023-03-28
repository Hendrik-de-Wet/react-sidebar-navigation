import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Button, Box, Toolbar, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import { AppBar, Typography } from "@mui/material";
import UserProfile from "../common/UserProfile";

const MainLayout = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const styles = {
    opacity: isOpen ? 1 : 0,
    transition: "width 0.2s",
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <Topbar /> */}

      <AppBar
        position="fixed"
        sx={{
          ...(isOpen
            ? { width: `calc(100% -  ${sizeConfigs.sidebar.width})` }
            : { width: `calc(100%)` }),
          ml: sizeConfigs.sidebar.width,
          boxShadow: "unset",
          backgroundColor: colorConfigs.topbar.bg,
          color: colorConfigs.topbar.color,
        }}
      >
        <Toolbar>
          <IconButton onClick={ToggleSidebar} size="small" aria-haspopup="true">
            <MenuIcon style={{ color: "#666666" }} />
          </IconButton>
          <Typography style={{ fontSize: "1.3em", paddingLeft: "10px" }}>
            Administration Portal
          </Typography>
          <div
            style={{ display: "flex", marginLeft: "auto", textAlign: "right" }}
          >
            <UserProfile />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        style={styles}
        component="nav"
        sx={{
          width: isOpen ? sizeConfigs.sidebar.width : "0px",
          flexShrink: 0,
          transition: `width 0.2s`,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          ...(isOpen
            ? {
                width: `calc(100% -  ${sizeConfigs.sidebar.width})`,
                transition: `width 0.2s`,
              }
            : { width: `calc(100%)`, transition: `width 0.1s` }),
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
