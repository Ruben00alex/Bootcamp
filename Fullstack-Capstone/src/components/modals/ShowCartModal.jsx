import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  Paper,
  Dialog,
  Container,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

import { useContext } from "react";

import AppContext from "../../context/AppContext";

const ShowCartModal = ({ open, onClose }) => {
  const { cart, setCart, cartAmount, setCartAmount, products } =
    useContext(AppContext);

  const increaseQuantity = (id, amount) => {
    let newCart = [...cart];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0].id == id) {
        if (cart[i][1] + amount > 0) {
          cart[i][1] += amount;
          setCart(newCart);
          setCartAmount((cartAmount) => cartAmount + amount);
        } else {
          newCart.splice(i, 1);
          setCart(newCart);
          setCartAmount((cartAmount) => cartAmount + amount);
        }
        break;
      }
    }
  };

  const showCartTotal = () => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (cart[i][0].id == products[j].id) {
          total += cart[i][1] * products[j].price;
          break;
        }
      }
    }

    return total;
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "100%",
        }}
      >
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="100%"
          sx={{
            maxWidth: "100%",
          }}
        >
          <TableContainer 
            component={Paper}
            sx={{
              maxWidth: "100%",
              margin: { xs: "0" },
              width: { xs: "1", md: "auto" },

            }}
          >
            <Table dense
              sx={{ display: { xs: "table", md: "table" } }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="left">Product Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row) => (
                  <TableRow
                    key={row[0].id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={products.find((product) => {
                            return product.id == row[0].id;
                          }).image}
                          
                          alt={row[0].name}
                          style={{
                            height: "50px",
                            marginRight: "10px",
                            objectFit: "cover",
                          }}
                          key={row[0].id + "img"}
                        />
                        <Typography variant="h6" key={row[0].id}>
                          {products.find((product) => {
                            return product.id == row[0].id;
                          }).name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{products.find((product) => {
                            return product.id == row[0].id;
                          }).description}</TableCell>
                    <TableCell align="center">{products.find((product) => {
                            return product.id == row[0].id;
                          }).price}</TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          children="-"
                          onClick={() => increaseQuantity(row[0].id, -1)}
                        />
                        {row[1]}
                        <Button
                          children="+"
                          onClick={() => increaseQuantity(row[0].id, 1)}
                        />
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <Typography variant="h6">
                        {products.find((product) => {
                            return product.id == row[0].id;
                          }).price * row[1]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
                {cart.length > 0 ?(
                  <>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        colSpan={4}
                        align="right"
                      >
                        Total
                      </TableCell>
                      <TableCell align="center">{showCartTotal()}</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" colSpan={5}>
                        <Link to="/checkout">
                          
                          <Button variant="outlined" color="primary"
                            onClick={onClose}
                          >Checkout</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </>
                ):(
                  <TableRow>
                    <TableCell component="th" scope="row" colSpan={5} align="center">
                      <Typography variant="h6">Your cart is empty</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Dialog>
      </Container>
    </>
  );
};
export default ShowCartModal;
