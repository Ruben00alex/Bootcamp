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

function App() {
  let [count, setCount] = useState(0);
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [isShopVisible, setIsShopVisible] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <>
      <NavBar setIsAdminVisible={setIsAdminVisible} />

      {isAdminVisible && (
        <AdminPage products={products} setProducts={setProducts} />
      )}
    </>
  );
}
export default App;
