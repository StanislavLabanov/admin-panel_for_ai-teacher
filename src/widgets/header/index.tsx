import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router";
import { routesEnum } from "@/app/const/routesEnum";
import { useState } from "react";
import { Sidebar } from "../sidebar";
import { pagesNameEnum } from "@/app/const/pagesNameEnum";

const getLocation = (pathname: routesEnum) => {
  if (pathname === routesEnum.MAIN) return pagesNameEnum.MAIN;
  if (pathname === routesEnum.TESTS) return pagesNameEnum.TESTS;
  if (pathname === routesEnum.WORDS) return pagesNameEnum.WORDS;
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {getLocation(location.pathname as routesEnum)}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
    </>
  );
};
