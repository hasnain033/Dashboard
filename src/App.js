import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState } from "react";

const drawerWidth = 240;

function App(props) {
  const [currentId, setcurrentId] = useState(null);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Toggle function
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [userData, setUserData] = useState([]);

  // HandleCallBack function trigger from sidebar
  const handleCallback = (childData) => {
    let updatedusers = [];
    let editedData = userData.filter((data) => data.id !== childData.id);
    updatedusers = [...editedData, childData];
    const sortingArray = updatedusers.sort((a, b) => a.priority - b.priority);
    setUserData(sortingArray);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Sidebar
        handleCallback={handleCallback}
        currentId={currentId}
        setcurrentId={setcurrentId}
      />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ backgroundColor: "#1C4E80" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashborad
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // For mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1c1f23",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1c1f23",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Main userData={userData} setcurrentId={setcurrentId} />
      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
