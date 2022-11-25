import {useEffect, useState} from 'react';


import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography, Fab } from "@mui/material";

const ProductInfo = ({product, handleOnDelete, handleOnEdit}) => {
    return (
    <Card sx={{ width:1,}} key={product.id}>
          <CardMedia
            height=".4"
            image={product.image}
            alt={product.name}
            component="img"
          />
          <CardContent
          height=".6">
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
        </Card>

    )
}


export default ProductInfo;