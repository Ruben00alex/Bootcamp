import CheckoutItem from "./CheckoutItem";

import AppContext from "../context/AppContext";

import { useContext } from "react";

import { Container, Grid, Box, Typography } from "@mui/material";

const CheckoutItemList = () => {
  const { cart, products } = useContext(AppContext);
  return (
    <>
      <Grid container>
       
       
        <Grid item xs={12} md={9} sx={{ display: {xs: "flex", md: "flex"}, flexDirection: {xs: "column", md: "row"} ,padding: "2rem", borderRadius: "1rem", boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)"}}>
        <Grid
            container 

            sx={{
                //the grid will be centered
                justifyContent: "center",
                
                }}
            >
            
            {cart.map((row) => (
              <Grid item xs={4} md={2}  key={row[0].id}>
                <CheckoutItem product={row} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6} md={3} key={1} sx ={{borderLeft: {md: "1px solid #e0e0e0", xs: "none"}}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: {sm: "center", md: "center"},
              alignItems: "center",
              width: "100%",
              margin: "1rem",

            }}
          >
            <Typography variant="h6">
              Subtotal:{"$"}
              {cart.reduce((acc, row) => {
                return acc + row[0].price * row[1];
              }, 0)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutItemList;
