import { useContext } from "react";
import AppContext from "../../context/AppContext";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

//import react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CheckoutItemList from "../CheckoutItemList";
const CheckoutPage = () => {
  const {
    cart,
    setCart,
    cartAmount,
    setCartAmount,
    products,
    orders,
    setOrders,
  } = useContext(AppContext);

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addToOrder = (data) => {
    //copy the orders array

    console.log("Adding to order");

    console.log(data);
    let newOrders = [...orders];
    //create a new order object
    let newOrder = {
      id: orders.length + 1,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      cart: cart,
      total: cart.reduce((acc, row) => {
        return acc + row[0].price * row[1];
      }, 0),
    };

    //add the new order to the new orders array
    newOrders.push(newOrder);

    setOrders(newOrders);
    console.log("New Orders");
    console.log(newOrders);
    setCart([]);
    setCartAmount(0);
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ width: "100%", mt: 15 }}>
        <Paper elevation={3} sx={{ p: 1, m: 0, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              mx: 0,
            }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              Checkout
            </Typography>
            <CheckoutItemList />
            <form onSubmit={handleSubmit(addToOrder)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100%",
                  width: "90%",
                  my: "5rem",
                  mx: "auto",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="h6" sx={{ my: 2 }}>
                  User Information
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <TextField
                    sx={{ width: "100%", mb: 2, mr: 2 }}
                    label="First Name"
                    variant="outlined"
                    {...register("firstName")}
                    error={errors.firstName ? true : false}
                    helperText={errors.firstName?.message}
                  />
                  <TextField
                    sx={{ width: "100%", mb: 2 }}
                    label="Last Name"
                    variant="outlined"
                    {...register("lastName")}
                    error={errors.lastName ? true : false}
                    helperText={errors.lastName?.message}
                  />
                </Box>
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  label="Email"
                  variant="outlined"
                  {...register("email")}
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                />
                <Typography variant="b" sx={{ mb: 2 }}>
                  Shipping Address
                </Typography>
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  label="Address"
                  variant="outlined"
                  {...register("address")}
                  error={errors.address ? true : false}
                  helperText={errors.address?.message}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    gap: 2,
                  }}
                >
                  <TextField
                    sx={{ width: "100%", mb: 2 }}
                    label="City"
                    variant="outlined"
                    {...register("city")}
                    error={errors.city ? true : false}
                    helperText={errors.city?.message}
                  />
                  <TextField
                    sx={{ width: "100%", mb: 2 }}
                    label="State"
                    variant="outlined"
                    {...register("state")}
                    error={errors.state ? true : false}
                    helperText={errors.state?.message}
                  />
                  <TextField
                    sx={{ width: "100%", mb: 2 }}
                    label="Zip"
                    variant="outlined"
                    {...register("zip")}
                    error={errors.zip ? true : false}
                    helperText={errors.zip?.message}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "20%", mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default CheckoutPage;
