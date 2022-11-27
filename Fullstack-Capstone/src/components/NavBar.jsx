import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Badge,
  Switch
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";

import AppContext from "../context/AppContext";

import {useContext} from 'react';
import {Link} from 'react-router-dom'
const NavBar = () => {
  
  const {cart, setCart, cartAmount, setCartAmount,showCartModal, setShowCartModal, useDarkTheme , setUseDarkTheme} = useContext(AppContext);


  const toggleTheme = () => {
    setUseDarkTheme((theme) => !theme);
  }

  console.log("DEBUG: render Navbar component");
  return (
    //make appbar always on top even when scrolling
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              // sans-serif:
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "white",
              display: { xs: "none", md: "flex" },
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/admin" style={{textDecoration: 'none'}}>
            <Button
            sx={{ my: 2, color: "white", display: "block" }} >
              Admin
            </Button>
            </Link>

            <Link to="/shop" style={{textDecoration: 'none'}}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Shop
            </Button>
            </Link>
          </Box>

          <Switch onChange={toggleTheme} />
          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={cartAmount} color="secondary">
            <IconButton sx={{ p: 0 }} onClick={() => setShowCartModal(true)}>
              <ShoppingCardIcon sx={{ color: "white" }} />
            </IconButton>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
