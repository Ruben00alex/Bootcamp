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
} from "@mui/material";

const ShowCartModal = ({ cart, open, onClose }) => {
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
      <Dialog open={open} onClose={onClose} sx={{ width: "100%" }}>
        <Container maxWidth="sm">
          <TableContainer
            component={Paper}
            sx={{ display: { xs: "flex", md: "flex" } }}
          >
            <Table sx={{ width: 1 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row) => (
                  <TableRow
                    key={row[0].id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row[0].name}
                    </TableCell>
                    <TableCell align="right">{row[0].description}</TableCell>
                    <TableCell align="right">{row[0].price}</TableCell>
                    <TableCell align="right">{row[1]}</TableCell>
                  </TableRow>
                ))}
                {cart.length > 0 && (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Total
                    </TableCell>
                    <TableCell align="right">{showCartTotal()}</TableCell>
                  </TableRow>
                )}

                {cart.length == 0 && (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography variant="h6">Your cart is empty</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Dialog>
    </>
  );
};
export default ShowCartModal;
