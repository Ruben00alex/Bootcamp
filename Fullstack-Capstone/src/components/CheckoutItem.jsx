
import {Typography, Box} from '@mui/material'


const CheckoutItem = ({product}) => {
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',
        height: '100%', m: '0',
        p:".25rem",
        borderRight: '1px solid white' }}>

            <Typography variant='h6'>{product[0].name}</Typography>
            <Typography variant='b2'>{product[0].description}</Typography>
            <Typography variant='b2'>${product[0].price}x {product[1]}</Typography>

        </Box>
    )
    }


export default CheckoutItem