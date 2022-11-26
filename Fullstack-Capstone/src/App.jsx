import { useEffect, useState, useRef } from "react";
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
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      description: "Incredible design",
      price: 1000,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 2,
      name: "Phone",
      description: "Incredible design",
      price: 1000,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 3,
      name: "Tablet",
      description: "Super fast",
      price: 500,
      image: "https://picsum.photos/300/200",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <>
      <NavBar
        cartAmount={cartAmount}
        showCartModal={showCartModal}
        setShowCartModal={setShowCartModal}
      />
      <Routes>
        <Route
          path="/admin"
          element={<AdminPage products={products} setProducts={setProducts} />}
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              products={products}
              cart={cart}
              setCart={setCart}
              cartAmount={cartAmount}
              setCartAmount={setCartAmount}
            />
          }
        />
        <Route path="/checkout" element={<CheckoutPage
        cart={cart}
        setCart={setCart}
        />}/>

      </Routes>
      <ShowCartModal
        cart={cart}
        open={showCartModal}
        onClose={() => setShowCartModal(false)}
        setCart={setCart}
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
      />
    </>
  );
}
export default App;
