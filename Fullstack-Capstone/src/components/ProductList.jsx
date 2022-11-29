import { useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Fab,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";

import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";

import AppContext from "../context/AppContext";

import ProductInfo from "./ProductInfo";

const ProductList = ({
  handleOnDelete,
  handleOnEdit,
  handleAddToCart,
  isAdmin,
}) => {
  const { products } = useContext(AppContext);

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box
                sx={{
                  display: "column",
                  width: 1,
                  border: "1px solid #eaeaea",
                  borderRadius: "11px",
                  //neon pink effect
                  boxShadow: "0 0 11px #ff00ff",
                }}
              >
                <ProductInfo product={product} />
                <Stack
                  direction="row"
                  sx={{ m: 0, align: "center", justifyContent: "center" }}
                >
                  {isAdmin && (
                    <>
                      <Button
                        onClick={() => handleOnEdit(product.id)}
                        sx={{
                          //edit button
                          color: "white",

                          //neon pink effect
                          boxShadow: "0 0 11px #ff00ff",

                          backgroundColor: "#ff00ff",
                          "&:hover": {
                            backgroundColor: "#ff00CC",
                          },
                          height: 64,
                          width: 1,
                          margin: 0,
                          padding: 0,
                          borderRadious: 0,
                        }}
                        type="primary"
                      >
                        EDIT
                      </Button>
                      <Button
                        onClick={() => handleOnDelete(product.id)}
                        sx={{
                          backgroundColor: "#ff5500",
                          "&:hover": {
                            backgroundColor: "#ff5533",
                          },
                          height: 64,
                          width: 1,
                          margin: 0,
                          padding: 0,
                          borderRadious: 0,
                          boxShadow: 3,
                        }}
                        type="error"
                      >
                        DELETE
                      </Button>
                    </>
                  )}

                  {!isAdmin && (
                    <Button
                      sx={{
                        width: 1,
                        align: "center",
                        justifyContent: "center",
                      }}
                      type="contained"
                      onClick={() => handleAddToCart(product)}
                    >
                      <Typography variant="h6">Add to Cart</Typography>
                      <ShoppingCardIcon sx={{ mx: 2 }} />
                    </Button>
                  )}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
