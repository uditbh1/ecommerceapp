import React from 'react'
import { AppBar,Typography,Toolbar,IconButton,Box, Button } from '@mui/material'
import {Badge} from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'

export default function Header() {
  return (
    <AppBar position='sticky'>
        <Toolbar>
            <Typography variant="h6" color="inherit" sx={{
                flexGrow:1,
            }}>Ecomm</Typography>
            <Box sx={{display:{xs:"none",md:"flex"}}}>
                <IconButton size="large" aria-label="shows cart items count" color="inherit">
                    <Badge badgeContent={1} color="error">
                        <ShoppingCartSharpIcon />
                    </Badge>
            </IconButton>
            </Box>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
  )
}
