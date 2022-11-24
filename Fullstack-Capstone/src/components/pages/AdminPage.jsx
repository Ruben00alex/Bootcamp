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

import { useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductFormModal from "../modals/ProductFormModal";
function AdminPage({ products, setProducts }) {
  const [isProductFormModalVisible, setIsProductFormModalVisible] =
    useState(false);

  let [isEdit, setIsEdit] = useState(false);

  let [productToEdit, setProductToEdit] = useState();

  const handleOnSubmit = (data) => {
    let newProducts = [...products];
    //we find the highest id in the array and add 1 to it, if there are no products we start at 1
    let newId = newProducts.length
      ? Math.max(...newProducts.map((p) => p.id)) + 1
      : 1;

    if (isEdit) {
      //find the index of the product in the products array
      let productIndex = newProducts.findIndex(
        (product) => product.id === productToEdit.id
      );
      
      //replace the product in the products array with the new product
      newProducts[productIndex] = { ...data, id: productToEdit.id };

      console.log("newProducts", newProducts);

      //set the productToEdit to null
      setProductToEdit(null);
      //set isEdit to false
      setIsEdit(false);
      //set the products state to the new products array
      setProducts(newProducts);
    }
    //if we are not editing, we are adding a new product
    else {
      newProducts.push({ ...data, id: newId });
    }
    //update the products state
    setProducts(newProducts);

    console.log("newProducts", newProducts);
    //close the modal
    setIsProductFormModalVisible(false);
    //reset the productToEdit state
    setProductToEdit(null);
    //reset the isEdit state
    setIsEdit(false);
  };

  const handleOnDelete = (id) => {
    console.log(id);
    //filter out the product with the id that was passed in
    let newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  //open the product form modal with the product data as the default values
  const handleOnEdit = (id) => {
    console.log(id);
    let productEdit = products.find((product) => product.id === id);
    console.log("productEdit", productEdit);
    setIsEdit(true);
    setProductToEdit(productEdit);
    setIsProductFormModalVisible(true);
  };

  return (
    <>
      <Box>
        <Fab
          variant="extended"
          sx={{ position: "absolute", bottom: 30, right: 30 }}
          color="primary"
          onClick={() => setIsProductFormModalVisible(true)}
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
      </Box>
      {!!products.length && (
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {products.map((product) => (
            <Card sx={{ width: 240, m: 2 }} key={product.id}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price} $
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ width: "50%" }}
                  size="small"
                  color="error"
                  type="outlined"
                  onClick={() => handleOnDelete(product.id)}
                >
                  Delete
                </Button>
                <Button
                  sx={{ width: "50%", color: "primary" }}
                  size="small"
                  type="outlined"
                  onClick={() => {
                    handleOnEdit(product.id);
                  }}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          ))}

          {isEdit && <p>Editing</p>}
        </Box>
      )}
    </>
  );
}

export default AdminPage;
