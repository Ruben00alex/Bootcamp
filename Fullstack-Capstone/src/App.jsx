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

function App() {
  let [count, setCount] = useState(0);
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

  return (
    <>
      <NavBar cartAmount={cartAmount} />
      <Routes>
        <Route
          path="/admin"
          element={<AdminPage products={products} setProducts={setProducts} />}
        />
        <Route
          path="/shop"
          element={
            <ShopPage products={products} cart={cart} setCart={setCart} cartAmount={cartAmount} setCartAmount={setCartAmount} />
          }
        />
      </Routes>
    </>
  );
}
export default App;
