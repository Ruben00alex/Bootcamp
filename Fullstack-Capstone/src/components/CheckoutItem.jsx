
import {Typography, Box} from '@mui/material'


//display the products , just the name, description and price, in a box that will be displayed by a father component in a flex container with the CheckoutItems next to each other.
const CheckoutItem = ({product}) => {
    
    return (
        //Box will be a squared container that will display the name, description and price of the product
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',
        height: '100%', m: '0',
        p:".25rem",
        borderRight: '1px solid white' }}>

            <Typography variant='h6'>{product[0].name}</Typography>
            <Typography variant='b2'>{product[0].description}</Typography>
            <Typography variant='b2'>{product[0].price}x {product[1]}</Typography>

        </Box>
    )
    }


export default CheckoutItem