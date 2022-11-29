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
} from "@mui/material";

import { useState,useContext } from "react";

import AppContext from "../../context/AppContext";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductFormModal from "../modals/ProductFormModal";
import ProductList from "../ProductList";

function AdminPage() {

  //Context where we store the products, cart, cartAmount, and the functions to modify them, here we are using the context to get the products
  const {products,setProducts} = useContext(AppContext);
  const [isProductFormModalVisible, setIsProductFormModalVisible] =
    useState(false);

  let [isEdit, setIsEdit] = useState(false);

  let [productToEdit, setProductToEdit] = useState();

  const handleOnSubmit = (data) => {
    let newProducts = [...products];
    let newId = newProducts.length
      ? Math.max(...newProducts.map((p) => p.id)) + 1
      : 1;

    if (isEdit) {
      let productIndex = newProducts.findIndex(
        (product) => product.id === productToEdit.id
      );
      newProducts[productIndex] = { ...data, id: productToEdit.id };
    } else {
      newProducts.push({ ...data, id: newId });
    }

    setProducts(newProducts);
    setIsProductFormModalVisible(false);
    setProductToEdit(null);
    setIsEdit(false);
  };

  const handleOnDelete = (id) => {
    let newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const handleOnEdit = (id) => {
    let productEdit = products.find((product) => product.id === id);
    setIsEdit(true);
    setProductToEdit(productEdit);
    setIsProductFormModalVisible(true);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Fab
          variant="extended"
          //place in the bottom right corner
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          color="primary"
          onClick={() => {
            setProductToEdit(null);
            setIsEdit(false);
            setIsProductFormModalVisible(true);
          }}
        >
          <AddCircleOutlineIcon sx={{ mx: 1 }} />
          Add Product
        </Fab>
        <ProductFormModal
          open={isProductFormModalVisible}
          onClose={() => {
            setIsProductFormModalVisible(false);
          }}
          onSubmit={handleOnSubmit}
          defaultEditValues={productToEdit}
        />
        {!!products.length && (
          <ProductList
            products={products}
            handleOnDelete={handleOnDelete}
            handleOnEdit={handleOnEdit}
            isAdmin={
              true /* this is just to show the edit and delete buttons */
            }
          />
        )}

        {!products.length && (
          <Box sx={{ height: 100, my: 10 }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              No products to display
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}

export default AdminPage;
