import { useEffect, useState, useRef, useContext, createContext } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import AdminPage from "./components/pages/AdminPage";
import ShopPage from "./components/pages/ShopPage";
import { Route, Routes } from "react-router-dom";
import ShowCartModal from "./components/modals/ShowCartModal";
import CheckoutPage from "./components/pages/CheckoutPage";

import AppContext from "./context/AppContext";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




function App() {


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
  //products are for an e-commerce site, don't repeat any information on the description
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      description: "Incredible design",
      price: 1000,
      image: "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Phone",
      description:"The best phone ever",
      price: 1000,
      image: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMHBob25lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Tablet",
      description: "Super fast",
      price: 500,
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    },
    {
      id: 4,
      name: "Desktop",
      description: "Useful for work",
      price: 2000,
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
    {
      id: 5,
      name: "Monitor",
      description: "40 inch",
      price: 500,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 6,
      name: "Keyboard",
      description: "Mechanical",
      price: 100,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 7,
      name: "Mouse",
      description: "Wireless",
      price: 50,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 8,
      name: "Headphones",
      description: "Noise cancelling",
      price: 200,
      image: "https://picsum.photos/300/200",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  //pedidos realizados, sera un array de objetos que tendra un carrito, el total y la direccion de envio
  const [orders, setOrders] = useState([]);
  //a context is a way to share data between components without having to pass props down the tree
  //in this case, we are creating a context that will be used to share the cart data, amount and the products data, and their setters between components

  return (
    <>
      <AppContext.Provider
        value={{
          products,
          setProducts,
          cart,
          setCart,
          cartAmount,
          setCartAmount,
          showCartModal,
          setShowCartModal,
          orders,
          setOrders,
          useDarkTheme,
          setUseDarkTheme,
        }}
      >
        //Theme provider that will change the theme depending on the state of the useDarkTheme variable
        <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        
          <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} setCart={setCart} />}
          />
        </Routes>
        <ShowCartModal
          open={showCartModal}
          onClose={() => setShowCartModal(false)}
        />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}
export default App;
