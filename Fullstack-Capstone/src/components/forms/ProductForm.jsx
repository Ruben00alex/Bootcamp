import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField } from "@mui/material";

function ProductForm({ onSubmit, defaultEditValues }) {
  const productSchema = yup.object().shape({
    name: yup.string().required().typeError("Name is required"),
    description: yup.string().required(),
    price: yup
      .number()
      .required()
      .positive()
      .typeError("Price must be a number"),
    image: yup.string().required(),
  });

  
  const defaultValues = {
    name: "",
    description: "",
    price: "",
    image: "",
  };
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultEditValues || defaultValues ,
    resolver: yupResolver(productSchema),
    mode: "all",
  });

  let imageUrl = watch("image");

  return (
    <Box
      id="product-form"
      component="form"
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: "24px" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Price:"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="image"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>

        {imageUrl && (
          <Grid item xs={12}>
            {" "}
            <img src={imageUrl} alt="product" style={{ width: "100%" }} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default ProductForm;
