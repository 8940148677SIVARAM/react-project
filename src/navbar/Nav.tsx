import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Card } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { loginpage, userLogin } from '../redux/SliceState';
import {
  FacebookOutlined as FacebookOutlinedIcon,
  Home as HomeIcon,
  AddToQueue as AddToQueueIcon,
  Diversity1Outlined as Diversity1OutlinedIcon,
  SportsEsportsOutlined as SportsEsportsOutlinedIcon,
  AccountBox as AccountBoxIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import "./nav.scss";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login: any = useSelector((state: any) => state.facebook.loginuser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu

      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="popup-box">
        <Card className="popup-img">
          <div className="popupimg-name">
            <div>
              <img src={login.img} alt="error"></img>
            </div>
            <div>
              <header><h6>NAME</h6>{login.name}</header>
            </div>
            <div>
              <h6>BIRTH DAY:</h6>{login.day},{login.month},{login.year}
            </div>
          </div>
        </Card>
        <MenuItem onClick={handleMenuClose}>
          <AccountBoxIcon></AccountBoxIcon><span onClick={() => navigate("/profile")}> Profile</span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LogoutIcon></LogoutIcon><span onClick={() => dispatch(loginpage(false))}>logout</span>
        </MenuItem>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => navigate("/message")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={() => navigate("/message")}>
        <IconButton
          size="large"

          color="inherit"
        >
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    // ==========================================================================

    <div id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Button className="face-icon">
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon className="search-icon" />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>
            <Box sx={{ flexGrow: 2 }}>
              {/* ==================================================================== */}
              <div className="navic-icon">
                <div className="navnav-icon active">
                  <HomeIcon style={{ cursor: "pointer" }}></HomeIcon>
                </div>
                <div className="navnav-icon" >
                  <button onClick={() => navigate("/post")}><AddToQueueIcon style={{ cursor: "pointer" }}></AddToQueueIcon></button>
                </div>
                <div className="navnav-icon" onClick={() => navigate("/message")}>
                  <Diversity1OutlinedIcon style={{ cursor: "pointer" }}></Diversity1OutlinedIcon>
                </div>
                <div className="navnav-icon">
                  <button onClick={() => navigate("/game")} style={{ cursor: "pointer" }}><SportsEsportsOutlinedIcon></SportsEsportsOutlinedIcon></button>
                </div>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            ben
            <IconButton
              size="large"
              edge="start"
              className="side-icon"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                onClick={() => navigate("/message")}
                className="side-icon"
              >
                <Badge color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                onClick={() => navigate("/message")}
                className="side-icon"
              >
                <Badge color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="side-icon"
              >
                {login.img ? <img src={login.img} width="50px" height="50px" style={{ borderRadius: "50%" }} alt="ok"></img> : <AccountCircle />}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                className="side-icon"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};
export default Nav;
