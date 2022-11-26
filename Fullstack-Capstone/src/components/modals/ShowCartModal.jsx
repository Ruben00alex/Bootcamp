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

const ShowCartModal = ({
  cart,
  setCart,
  open,
  onClose,
  cartAmount,
  setCartAmount,
}) => {
  const increaseQuantity = (id, amount) => {
    let newCart = [...cart];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0].id == id) {
        if (cart[i][1] + amount > 0) {
          cart[i][1] += amount;
          setCart(newCart);
          setCartAmount((cartAmount) => cartAmount + amount);
        } else {
          //remove the item from the cart
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
    cart.forEach((item) => {
      total += item[0].price * item[1];
    });
    console.log(total);
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
            margin: { xs: "0" },
            width: { xs: "1", md: "auto" },
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
            <Table
              sx={{ display: { xs: "block", md: "table" } }}
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
                          src={row[0].image}
                          alt={row[0].name}
                          //cover
                          style={{ height: "50px" ,marginRight: "10px"}}
                          key={row[0].id+"img"}
                        />
                        <Typography variant="h6" key={row[0].id}>
                          {row[0].name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row[0].description}</TableCell>
                    <TableCell align="right">{row[0].price}</TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: "flex", justifyContent: "center" ,alignItems: "center"}}>
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
                        {row[0].price * row[1]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
                {cart.length > 0 && (
                  <>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" colSpan={4} align="right">
                        Total
                      </TableCell>
                      <TableCell align="center">{showCartTotal()}</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" colSpan={4} align="right">
                        Go to checkout
                      </TableCell>
                      <TableCell align="right">
                        <Link to="/checkout">
                          <Button variant="contained">Checkout</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </>
                )}

                {cart.length == 0 && (
                  <TableRow>
                    <TableCell component="th" scope="row">
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
