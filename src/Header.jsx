// import './App.css'
// import { IoIosSearch } from "react-icons/io";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { Link } from 'react-router-dom'; 

// const Header = () => {

//   return (
//     <div className='header'>
//           <div className='search'>
//            <input className='input' type="text" placeholder='Search' />
//            <IoIosSearch  className='search-icon'/>
//            </div>
//            <div className='nav-bar'>
//            <Link to="/" className="home">Home</Link>
//         <Link to="/about" className="home">About</Link>
//         <Link to="/travel" className="home">Travel</Link>
//         <Link to="/eat" className="home">Eat</Link>
//         <Link to="/post" className="home">Post</Link>
//             <FaFacebookF className='fb-icon'/>
//             <FaInstagram className='insta-icon' />
//             <FaTwitter className='twitter-icon' />
//             </div>
//         </div>
//   )
// }

// export default Header

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom'; 
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreIcon from '@mui/icons-material/MoreVert';
import FacebookIcon from '@mui/icons-material/Facebook';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <InstagramIcon />
          {/* <Badge badgeContent={4} color="error">
         
          </Badge> */}
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        > 
        <FacebookIcon />
          {/* <Badge badgeContent={17} color="error">
           
          </Badge> */}
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
          <XIcon/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography
            variant="h6"
            noWrap
            component="div"
            marginLeft="10%"
            padding="15px"
            justifyContent="space-evenly"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
        <Link to="/" className="home">Home</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            padding="20px"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           <Link to="/about" className="home">About</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            padding="20px"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/travel" className="home">Travel</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            padding="20px"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/eat" className="home">Eat</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            padding="20px"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           <Link to="/post" className="home">Post</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <InstagramIcon />
              {/* <Badge badgeContent={4} color="error">
             
              </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <FacebookIcon />
              {/* <Badge badgeContent={17} color="error">
              
              </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <XIcon/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
