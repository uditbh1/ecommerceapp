
import { ShoppingCartSharp} from '@mui/icons-material';
import { CardMedia, Container, Grid,Card, Typography, Rating,CardContent, useTheme, CardActions, IconButton,Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {
    const theme=useTheme();
    const [products,setProducts]=useState([])

    async function fetchAllProducts(){
        const response=await fetch('https://fakestoreapi.com/products');
            const result=await response.json();
            setProducts(result);
    }

    useEffect(() => {
      fetchAllProducts()
    }, [])
    


  return (
    <Container sx={{py:8}} maxWidth="lg">
        <Grid container spacing={4}>
            {products.map(({title,id,price,description,rating,image})=>
            (<Grid item key={id} xs={12} sm={6} md={3}>
              <Card sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                <CardMedia component="img" sx={{alignSelf:"center",width:theme.spacing(30),height:theme.spacing(30),objectFit:"contain",pt:theme.spacing()}} 
                image={image} alt={title} />
                <CardContent>
                    <Typography color="text.secondary" paragraph variant="h5" component="h2" gutterBottom sx={{
                        overflow:"hidden",
                        textOverflow:"ellipsis",
                        display:"-webkit-box",
                        "-webkit-line-clamp":"1",
                        "-webkit-box-orient":"vertical",
                    }}>{title}</Typography>
                    <Typography gutterBottom sx={{
                        overflow:"hidden",
                        textOverflow:"ellipsis",
                        display:"-webkit-box",
                        "-webkit-line-clamp":"2",
                        "-webkit-box-orient":"vertical",
                    }}>{description}</Typography>
                    <Typography fontSize="large" paragraph>{price}</Typography>
                    <Rating readOnly precision={0.5} value={rating.rate} />
                </CardContent>
                <CardActions sx={{
                    alignSelf:"center"
                }}>
                    <Button variant="contained">
                        <ShoppingCartSharp />
                        Add to cart
                    </Button>
                </CardActions>
              </Card>
            </Grid>))}
        </Grid>
    </Container>
  )
}
