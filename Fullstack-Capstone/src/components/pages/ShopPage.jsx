import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ProductList from "../ProductList";
const ShopPage = ({ products, cart, setCart, cartAmount, setCartAmount }) => {
  const handleAddToCart = (product) => {
    console.log("product", product);
    //cart is a 2d array, each element is an array of [product, quantity], so we need to check if the product is already in the cart
    let productInCart = false;

    let newCart = [...cart];
    //if the product is already in the cart, we need to increment the quantity

    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0].id == product.id) {
        cart[i][1] += 1;
        productInCart = true;
        break;
      } else {
        console.log("product not in cart");
      }
    }

    //If the product is not in the cart, we need to add it
    if (!productInCart) {
      console.log("product not in cart");
      console.log("adding product to cart");
      newCart.push([product, 1]);
    }

    setCartAmount((cartAmount) => cartAmount + 1);
    setCart(newCart);
    console.log("newCart", newCart);
  };
  return (
    <>
      <Container maxWidth="lg">
        <ProductList
          products={products}
          isAdmin={false}
          handleAddToCart={handleAddToCart}
        />
      </Container>
    </>
  );
};

export default ShopPage;
