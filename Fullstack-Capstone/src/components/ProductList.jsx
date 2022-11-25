import { useState } from "react";
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

import ProductInfo from "./ProductInfo";

const ProductList = ({
  products,
  handleOnDelete,
  handleOnEdit,
  handleAddToCart,
  isAdmin,
}) => {
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box
                sx={{
                  display: "column",
                  width: 1,
                  border: "1px solid #0055ff",
                  borderRadius: "11px",
                  boxShadow: "3px 3px 10px #0055ff",
                }}
              >
                <ProductInfo product={product} />
                <Stack direction="row" sx={{ mt: 1, align: "center" ,justifyContent:"center"}}>
                  {isAdmin && (
                    <>
                      <Button
                        onClick={() => handleOnEdit(product.id)}
                        sx={{
                          background: "yellow",
                          height: 64,
                          width: 1,
                          margin: 0,
                          padding: 0,
                          borderRadious: 0,
                          boxShadow: 3,
                        }}
                      >
                        EDIT
                      </Button>
                      <Button
                        onClick={() => handleOnDelete(product.id)}
                        sx={{
                          background: "red",
                          height: 64,
                          width: 1,
                          margin: 0,
                          padding: 0,
                          borderRadious: 0,
                          boxShadow: 3,
                        }}
                      >
                        DELETE
                      </Button>
                    </>
                  )}

                  {!isAdmin && (
                    <Button
                      sx={{ width: 1 ,align: "center" ,justifyContent:"center" }}
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
