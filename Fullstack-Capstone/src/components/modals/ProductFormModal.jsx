import { Dialog, DialogTitle ,Box, DialogContent , DialogActions ,Button} from "@mui/material";

import ProductForm from "../forms/ProductForm";
function ProductFormModal({ open, onClose,onSubmit,defaultEditValues }) {
  return (
    <>
      <Dialog open={open} onClose={onClose }>
        <DialogTitle>Product Form</DialogTitle>
    <DialogContent>
      <ProductForm onSubmit={onSubmit} defaultEditValues={defaultEditValues} />
      </DialogContent>
      <DialogActions>
        <Button variant='outlined'
          form='product-form'
          type='submit'
           onClick={onClose}>
            {defaultEditValues ? "Edit" : "Add"}

            </Button>
        <Button
        variant='contained'
        color='error'
        form='product-form'
        type='reset'
        children='Clear form' />
      </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductFormModal;
