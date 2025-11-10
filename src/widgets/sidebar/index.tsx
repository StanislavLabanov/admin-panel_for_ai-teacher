import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import QuizIcon from "@mui/icons-material/Quiz";
import { pagesNameEnum } from "@/app/const/pagesNameEnum";
import { useNavigate } from "react-router";
import { routesEnum } from "@/app/const/routesEnum";

interface SidebarProps {
  handleDrawerClose: () => void;
  open: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const drawerWidth = "100%";

export const Sidebar = ({ open, handleDrawerClose }: SidebarProps) => {
  const navigate = useNavigate();

  const clickHandler = (item: pagesNameEnum) => {
    if (item === pagesNameEnum.MAIN) navigate(routesEnum.MAIN);
    if (item === pagesNameEnum.TESTS) navigate(routesEnum.TESTS);
    if (item === pagesNameEnum.WORDS) navigate(routesEnum.WORDS);
    handleDrawerClose();
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[pagesNameEnum.MAIN, pagesNameEnum.WORDS, pagesNameEnum.TESTS].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => clickHandler(text)}>
                <ListItemIcon>
                  {text === pagesNameEnum.MAIN ? (
                    <SignalCellularAltIcon />
                  ) : null}
                  {text === pagesNameEnum.WORDS ? <GTranslateIcon /> : null}
                  {text === pagesNameEnum.TESTS ? <QuizIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};
